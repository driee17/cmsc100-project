// CATEGORIES FOR AGRICULTURAL PRODUCE
const categories = [
    { productType: "Fruits" },
    { productType: "Vegetables" },
    { productType: "Grains" },
    { productType: "Dairy" },
    { productType: "Herbs & Spices" },
    { productType: "Legumes" },
];

// AGRICULTURAL PRODUCE DATA
const data = [
    {   
        productID: 1, 
        productName: "Fresh Mangoes", 
        imgurl: "https://i.pinimg.com/736x/ae/2d/38/ae2d380c1add5d956518ffc948bd99cf.jpg", 
        url: "#", 
        productDesc: "Ripe, sweet, and juicy mangoes from a local farm.",  
        productType: "Fruits", 
        productQuan: 25,
        productPrice: 2.50
    },
    {   
        productID: 2, 
        productName: "Organic Tomatoes", 
        imgurl: "https://i.pinimg.com/736x/ae/2d/38/ae2d380c1add5d956518ffc948bd99cf.jpg", 
        url: "#", 
        productDesc: "Fresh, plump tomatoes perfect for sauces, salads, and more.",  
        productType: "Vegetables", 
        productQuan: 100,
        productPrice: 1.75
    },
    {   
        productID: 3, 
        productName: "Basmati Rice", 
        imgurl: "https://i.pinimg.com/736x/ae/2d/38/ae2d380c1add5d956518ffc948bd99cf.jpg", 
        url: "#", 
        productDesc: "Premium-quality, long-grain Basmati rice.",  
        productType: "Grains", 
        productQuan: 300,
        productPrice: 0.90
    },
    {   
        productID: 4, 
        productName: "Fresh Basil Leaves", 
        imgurl: "https://i.pinimg.com/736x/ae/2d/38/ae2d380c1add5d956518ffc948bd99cf.jpg", 
        url: "#", 
        productDesc: "Aromatic basil leaves, ideal for Italian and Thai cuisine.",  
        productType: "Herbs & Spices", 
        productQuan: 50,
        productPrice: 3.00
    },
    {   
        productID: 5, 
        productName: "Red Kidney Beans", 
        imgurl: "https://i.pinimg.com/736x/ae/2d/38/ae2d380c1add5d956518ffc948bd99cf.jpg", 
        url: "#", 
        productDesc: "Nutritious red kidney beans, ideal for soups, stews, and chili.",  
        productType: "Legumes", 
        productQuan: 120,
        productPrice: 1.50
    },
    {   
        productID: 6, 
        productName: "Farm Fresh Eggs", 
        imgurl: "https://i.pinimg.com/736x/ae/2d/38/ae2d380c1add5d956518ffc948bd99cf.jpg", 
        url: "#", 
        productDesc: "Farm-fresh, organic eggs from free-range chickens.",  
        productType: "Dairy", 
        productQuan: 200,
        productPrice: 0.30
    },
];


const users = [
    {
        firstName: "Juan",
        middleName: "Carlos", // Optional
        lastName: "Dela Cruz",
        userType: "Customer",
        email: "juan.delacruz@example.com",
        password: "P@ssw0rd123!"
    },
    {
        firstName: "Maria",
        middleName: null, // No middle name provided
        lastName: "Santos",
        userType: "Customer",
        email: "maria.santos@example.com",
        password: "S3cur3P@ss!"
    },
    {
        firstName: "John",
        middleName: "Edward",
        lastName: "Smith",
        userType: "Admin",
        email: "admin.john@example.com",
        password: "Admin!2345"
    },
    {
        firstName: "Elizabeth",
        middleName: "Rose",
        lastName: "Johnson",
        userType: "Supplier",
        email: "elizabeth.johnson@supplierhub.com",
        password: "Supplier$ecure1"
    },
    {
        firstName: "Chris",
        middleName: null, // No middle name provided
        lastName: "Evans",
        userType: "Guest",
        email: "guest.evans@temporarymail.com",
        password: "Gue$tUser2024"
    },
    {
        firstName: "Sophia",
        middleName: "Isabelle",
        lastName: "Garcia",
        userType: "Manager",
        email: "sophia.garcia@companymail.com",
        password: "Man@ger321!"
    },
    {
        firstName: "Miguel",
        middleName: "Antonio",
        lastName: "Reyes",
        userType: "Delivery",
        email: "miguel.reyes@deliveryhub.com",
        password: "D3liv3ryMan!"
    },
    {
        firstName: "Alex",
        middleName: null, // No middle name
        lastName: "Doe",
        userType: "Guest",
        email: "anonymous.doe@nomail.com",
        password: "Anon$ecure!"
    }
];


export {categories, data, users};
