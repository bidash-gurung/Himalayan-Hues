const Product = require("../model/productModel");
const AppError = require("../utils/appError");
const multer = require("multer");

const storageEngine = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "views/image/product");
    },
    filename: (req, file, cb) => {
        const ext = file.mimetype.split("/")[1];
        cb(null, `Product-${Date.now()}.${ext}`);
    }
});

const multerFilter = (req, file, cb) => {
    if (file.mimetype.startsWith("image")) {
        cb(null, true);
    } else {
        cb(new AppError("Not an image! Please upload only images", 400), false);
    }
};

const upload = multer({
    storage: storageEngine,
    fileFilter: multerFilter
});

exports.uploadProductPhoto = upload.single("photo");

// const filterObj = (obj, ...allowedFields) => {
//     const newObj = {};
//     Object.keys(obj).forEach((el) => {
//         if (allowedFields.includes(el)) newObj[el] = obj[el];
//     });
//     return newObj;
// }

function filterObj(obj, ...allowedFields) {
    const filteredObj = {};
    Object.keys(obj).forEach(key => {
        if (allowedFields.includes(key)) {
            filteredObj[key] = obj[key];
        }
    });
    return filteredObj;
}

exports.createProduct = async (req, res) => {
    try {
        // console.log(req.body)
        const filteredBody = filterObj(req.body, "product_name", "photo", "description", "price", "bank", "quantity", "account","user");
        if (req.file) {
            filteredBody.photo = req.file.filename;
        }
        const product = await Product.create(filteredBody);
        res.json({ data: product, status: "success" });
    } catch (err) {
        console.log(err.message)
        res.status(500).json({ error: err.message });
    }
}

exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json({ data: products, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

exports.getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.json({ data: product, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

// exports.updateProduct = async (req, res) => {
//     try {
//         console.log(req.file)
//         const updatedData = filterObj(req.body, "product_name","photo", "description", "product_id", "price", "bank", "account","user");
//         // console.log("update executed")
//         if (req.file) {
//             updatedData.photo = req.file.filename;
//         } 
//         const product = await Product.findByIdAndUpdate(req.params.id, updatedData, { new: true, runValidators: true });
//         res.json({ data: product, status: "success" });
//     } catch (err) {
//         // console.log("Error executed")

//         res.status(500).json({ error: err.message });
//     }
// }

// exports.updateProduct = async (req, res) => {
//     try {
//         // Find the existing product by its ID
//         const existingProduct = await Product.findById(req.params.id);

//         // Check if a new photo is uploaded, and update if it is
//         if (req.file) {
//             existingProduct.photo = req.file.filename;
//         }

//         // Update other fields (excluding photo) without changing the existing photo
//         const updatedData = filterObj(req.body, "product_name", "description", "product_id", "price", "bank", "account", "user");
//         console.log(updatedData)
//         // Use the `existingProduct` to update the fields
//         Object.assign(existingProduct, updatedData);
//         const product = await existingProduct.save();

//         res.json({ data: product, status: "success" });
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// }

// exports.updateProduct = async (req, res) => {
//     try {
//       const property1 = await Product.findByIdAndUpdate(req.params.id, req.body, {
//         new: true,
//         runValidators: true,
//       })
//       console.log(property1)
//       res.status(200).json({
//         status: 'success',
//         data: {
//           property1,
//         },
//       })
//     } catch (err) {
//       res.status(404).json({
//         status: 'fail',
//         message: err,
//       })
//     }
//   }
  
exports.updateProduct = async (req, res) => {
    try {
        const updated = await Product.findByIdAndUpdate(req.params.id, req.body);
        res.json({ data: updated, status: "success" })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}



exports.deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        res.json({ data: product, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}
