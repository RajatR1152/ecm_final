const express = require('express');
const app = express();
const port = 5000;
const mongoose = require('mongoose');
const cors = require('cors');
const mobiles = require('./contexts/ProductContext');
const laptops = require('./contexts/LaptopContext');
const homeAppliences = require('./contexts/HomeAppContext');
const tshirts = require('./contexts/TshirtContext');
const shoes = require('./contexts/ShoesContext');
const bc = require('bcrypt');
const user = require('./contexts/UserContext');
const allProds = require('./contexts/AllProdsContext');
const earphones = require('./contexts/EarphonesContext');
const tvs = require('./contexts/TvsSchema');
const watches = require('./contexts/WatchesSchema');
const electronics = require('./contexts/ElectronicsContext');
const Razorpay = require('razorpay');
require('dotenv').config();


app.use(cors());
app.use(express.json());

const razorpay = new Razorpay({
    key_id: 'rzp_test_PwPHcfV19dGbu7',
    key_secret: 'Q0RI78C59W3nNmzFKxyrQKJu'
})

const conn = mongoose.connect('mongodb+srv://rajatrandai7:RajatR1152@cluster0.uug8x0o.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("connection successfull");
})

app.post('/login', (req, res) => {

    user.findOne({ email: req.body.data.email }).then(async (d) => {
        if (d) {
            let isMatched = await bc.compare(req.body.data.password, d.password);

            if (isMatched) {
                res.send({
                    code: 200,
                    message: 'login successfull'
                })
            }

            else {
                res.send({
                    code: 401,
                    message: 'invalid credentials'
                })
            }
        }
        else {
            res.send({
                code: 401,
                message: 'invalid credentials'
            })
        }
    })

})

app.post('/register', async (req, res) => {

    let hashed = await bc.hash(req.body.data.password, 10);

    let ud = {
        username: req.body.data.username,
        password: hashed,
        cart: [],
        favourites: [],
        history: [],
        email: req.body.data.email,
        address: " "
    }

    user.findOne({ email: req.body.data.email }).then((d) => {
        if (d) {
            res.send({
                code: 401,
                message: 'email already exist'
            })
        }
        else {
            const u = new user(ud);
            u.save().then(() => {
                res.send({
                    code: 200,
                    message: 'user created successfully'
                })
            })
        }
    })

})

app.post('/mobiles', async (req, res) => {
    mobiles.find().then((d) => {
        res.send(d);
    })
});

app.post('/electronics', async (req, res) => {
    electronics.find().then((d) => {
        res.send(d);
    })
});

app.post('/toys', async (req, res) => {
    mobiles.find().then((d) => {
        res.send(d);
    })
});

app.post('/productData', async (req, res) => {

    try {
        const [
            r1,
            r2,
            r3,
            r4,
            r5,
            r6,
            r7,
            r8
        ] = await Promise.all([
            mobiles.findById(req.body.id),
            shoes.findById(req.body.id),
            tshirts.findById(req.body.id),
            laptops.findById(req.body.id),
            earphones.findById(req.body.id),
            homeAppliences.findById(req.body.id),
            tvs.findById(req.body.id),
            watches.findById(req.body.id),
        ]);

        const collections = {
            mobiles: r1,
            shoes: r2,
            tshirts: r3,
            laptops: r4,
            earphones: r5,
            homeAppliences: r6,
            tvs: r7,
            watches: r8
        };

        const foundEntry = Object.entries(collections).find(([key, val]) => val !== null);

        if (foundEntry) {

            const [collectionName, doc] = foundEntry;

            const data = doc.toObject ? doc.toObject() : doc;

            data.collection = collectionName;

            res.send({
                data,
                collection: collectionName,
                code: 200
            });
        } else {
            console.log(`No collection contains ID: ${req.body.id}`);
            res.status(404).send({
                message: "Product not found",
                code: 404
            });
        }
    } catch (err) {
        console.error("Error in productData:", err);
        res.status(500).send({ message: "Server error", code: 500 });
    }
});



app.post('/laptops', async (req, res) => {
    laptops.find().then((d) => {
        res.send(d);
    })
});

app.post('/homeapp', async (req, res) => {
    homeAppliences.find().then((d) => {
        res.send(d);
    })
});

app.post('/shoes', async (req, res) => {
    shoes.find().then((d) => {
        res.send(d);
    })
});

app.post('/tshirts', async (req, res) => {
    tshirts.find().then((d) => {
        res.send(d);
    })
});

app.post('/clothing', async (req, res) => {
    tshirts.find().then((d) => {
        res.send(d);
    })
});

app.post('/tvs', async (req, res) => {
    tvs.find().then((d) => {
        res.send(d);
    })
});

app.post('/watches', async (req, res) => {
    watches.find().then((d) => {
        res.send(d);
    })
});

app.post('/earphones', async (req, res) => {
    earphones.find().then((d) => {
        res.send(d);
    })
});



app.post('/category', async (req, res) => {
    let c = req.body.category[0].toLowerCase().replace("%20", "");


    switch (c) {
        case 'shoes':
            shoes.find().then((d) => {
                res.send(d);
            })
            break;

        case 'electronics':

            try {
                const [tvsData, mobilesData, laptopsData, earphonesData] = await Promise.all([
                    tvs.find(),
                    mobiles.find(),
                    laptops.find(),
                    earphones.find()
                ]);

                const od = [...tvsData, ...mobilesData, ...laptopsData, ...earphonesData];

            } catch (err) {
                console.error(err);
                res.status(500).send({ error: 'Error fetching electronics data' });
            }
            break;


        case 'tvs':
            tvs.find().then((d) => {
                res.send(d);
            })
            break;

        case 'laptops':
            laptops.find().then((d) => {
                res.send(d);
            })
            break;

        case 'clothing':
            tshirts.find().then((d) => {
                res.send(d);
            })
            break;

        case 'watches':
            watches.find().then((d) => {
                res.send(d);
            })
            break;

        case 'furniture':
            tshirts.find().then((d) => {
                res.send(d);
            })
            break;

        case 'mobiles':
            mobiles.find().then((d) => {
                res.send(d);
            })
            break;

        case 'homeappliances':
            homeAppliences.find().then((d) => {
                res.send(d);
            })

        case 'allProds':
            allProds.find().then((d) => {
                res.send(d);
            })
    }

})

app.post('/addtocart', (req, res) => {
    user.findOne({ email: req.body.user }).then((d) => {
        d.cart.push(req.body.data);
        d.save().then(() => {
            res.send({
                message: 'added to cart',
                code: 200
            })
        })
    });
})

app.post('/createorder', (req, res) => {
    user.findOne({ email: req.body.email }).then((d) => {
        d.orders.push(req.body.data);
        d.save().then(() => {
            res.send({
                message: 'order created successfully !',
                code: 200
            })
        })
    });
})

app.post('/order', async (req, res) => {
    const { amount } = req.body;

    if (!amount || isNaN(amount) || amount <= 0) {
        return res.status(400).json({ error: 'Invalid amount' });
    }

    try {
        const data = await razorpay.orders.create({
            amount: amount * 100,
            currency: "INR",
            receipt: "order_receipt",
        });

        res.json({
            amount: data.amount,
            orderId: data.id,
        });
    } catch (error) {
        console.error('Error creating Razorpay order:', error);
        res.status(500).json({ error: 'Error creating order' });
    }

})

app.post('/getuser', (req, res) => {
    user.findOne({ email: req.body.email }).then((d) => {
        res.send(d);
    })
})

app.post('/cartremove', (req, res) => {

    user.findOne({ email: req.body.email }).then((d) => {

        d.cart = d.cart.filter(item => JSON.stringify(item) !== JSON.stringify(req.body.data));

        d.save().then(() => {
            res.send({
                message: 'Item removed from cart',
                code: 200,
                cart: d.cart
            });
        });
    })
})

app.post('/orderremove', (req, res) => {

    user.findOne({ email: req.body.email }).then((d) => {

        d.orders = d.orders.filter(item => JSON.stringify(item) !== JSON.stringify(req.body.data));

        d.save().then(() => {
            res.send({
                message: 'Item removed from orders',
                code: 200,
                orders: d.orders
            });
        });
    })
})

// POST /updateuser
app.post('/updateuser', async (req, res) => {
  try {
    const { email, name, phone, address, avatar } = req.body;

    const updatedUser = await user.findOneAndUpdate(
      { email },
      { name, phone, address, avatar },
      { new: true }
    );

    res.send({
      message: 'Profile updated successfully ✅',
      user: updatedUser,
    });
  } catch (err) {
    console.error('Error updating user:', err);
    res.status(500).send({ message: 'Server error', error: err });
  }
});


app.listen(port, () => {
    console.log(`listening on : ${port}`);
})