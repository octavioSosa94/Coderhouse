import { useCartContext } from '../../context/Cart.Context'
import { render } from "react-dom";
import { getFirestore, collection, addDoc, writeBatch, doc } from "firebase/firestore"
import { useForm } from "react-cool-form";
import Input from '@mui/material/Input';
import Swal from 'sweetalert2'
import { completeCart } from '../Cart/Cart'
import { Link } from "react-router-dom"
import Button from '@mui/material/Button';
import {
    FormGroup,
    FormControl,
    FormControlLabel,
    FormLabel,
    InputLabel,
    TextField,
    Select,
    Checkbox,
    RadioGroup,
    Radio
    
  } from "@mui/material";
  
  

var endPurchase = false;

const Checkout = () => {

    const { cart, finalPrice, deleteAll } = useCartContext();
    const mercadopago = require('mercadopago');
    // Agrega credenciales
    mercadopago.configure({
        access_token: 'TEST-2303381305717374-092400-8ff150ef3f8c30c21933e1cf94e46d62-258648039'
    });

    let preference = {
        items: [
            {
                title: 'Mi producto',
                unit_price: 100,
                quantity: 1,
            }
        ]
    };

    mercadopago.preferences.create(preference)
        .then(function (response) {
            // Este valor reemplazará el string "<%= global.id %>" en tu HTML
            global.id = response.body.id;
        }).catch(function (error) {
            console.log(error);
        });
        const mp = new mercadopago('TEST-2303381305717374-092400-8ff150ef3f8c30c21933e1cf94e46d62-258648039', {
            locale: 'es-AR'
      });
      






    const checkOut = (values) => {

        const sale = {
            customer: {
                name: values.name,
                cuil: values.cuil,
                email: values.email,
                phone: values.phone
            },
            items: completeCart,
            date: new Date(Date.now()).toISOString(),
            finalPrice: finalPrice
        };
        const db = getFirestore();

        const ordersCollection = collection(db, "sales");

        addDoc(ordersCollection, sale).then(({ id }) => {
            Swal.fire({
                title: "Thank you for your purchase!",
                text: `Your payment code is ${id} `,
                icon: "success",
                confirmButtonText: "OK"
            }).then(function() {
                window.location = "/";
            });

            deleteAll();
            




        });
        

        const batch = writeBatch(db);
        completeCart.forEach((item) => {
            const itemRef = doc(db, "items", item.id)
            batch.update(itemRef, { stock: parseInt(item.product.stock) - item.quantity });
        });

        batch.commit()
    }

    const { form, use } = useForm({
        defaultValues: { name: "", cuil: "", email: "", phone: "" },
        onSubmit: (values) => checkOut(values, cart)
    });
    const errors = use("errors");

    return (
        
        <div id="cho-container">
            {!Boolean(endPurchase) && (<h1>Please complete the required information before proceeding</h1>)}
            {!Boolean(endPurchase) && (<form ref={form} noValidate>
                <form ref={form} noValidate>
      <TextField
        label="name"
        name="name"
        required
        error={!!errors.username}
        helperText={errors.username}
      />
      <TextField
        label="CUIL"
        name="CUIL"
        required
        error={!!errors.username}
        helperText={errors.username}
      />
      <TextField
        label="email"
        name="email"
        required
        error={!!errors.username}
        helperText={errors.username}
      />
      <TextField
        label="telephone"
        name="telephone"
        required
        error={!!errors.username}
        helperText={errors.username}
      />
      
      <FormControl component="fieldset">
        <FormLabel component="legend">How was your experience?</FormLabel>
        <RadioGroup name="mood" aria-label="mood" row>
          <FormControlLabel control={<Radio />} value="😊" label="😊" />
          <FormControlLabel control={<Radio />} value="🤬" label="🤬" />
        </RadioGroup>
      </FormControl>
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
                
                
                
            </form>)

            }
        </div>
    );
}

export default Checkout;


