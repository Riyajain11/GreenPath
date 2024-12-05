const farmersData = [
    {
        name: "Surya Rao",
        state: "Andhra Pradesh",
        city: "Visakhapatnam",
        items: "Maize", 
        image: "https://plus.unsplash.com/premium_photo-1667047165840-803e47970128?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW1hZ2VzJTIwb2YlMjBtYWl6ZSUyMGluJTIwdGhlJTIwZmFybXxlbnwwfHwwfHx8MA%3D%3D",
        price: 150,
        country: "India"
    },
    {
        name: "Ravi Kumar",
        state: "Punjab",
        city: "Amritsar",
        items: " Rice", 
        image: "https://plus.unsplash.com/premium_photo-1705516190542-8b3376798ea4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ,
        price: 200,
        country: "India"
    },
    {
        name: "Poonam Yadav",
        state: "Maharashtra",
        city: "Pune",
        items: "Sugarcane", 
        image: "https://media.istockphoto.com/id/2166593748/photo/sugar-cane-stalks-with-sugar-cane-plantation-background-sugarcane-planted-to-produce-sugar.jpg?s=1024x1024&w=is&k=20&c=-sDB4_-t15wvQINlXnhpU3FudNz80t0X-YPQzLNOekA=", 
        price: 180,
        country: "India"
    },
    {
        name: "Anil Patel",
        state: "Gujarat",
        city: "Ahmedabad",
        items: "Cotton, Groundnut", 
        image:"https://media.istockphoto.com/id/1414254104/photo/fluffy-cotton-in-the-field.webp?a=1&b=1&s=612x612&w=0&k=20&c=kpx7B4Ke7RXvAIQqf4QuzwyZY99gp1n2rVT-5VSs4mg=",
        price: 250,
        country: "India"
    },
    {
        name: "Ramesh Naik",
        state: "Karnataka",
        city: "Bangalore",
        items: "Coconut, Ragi", 
        image: "https://media.istockphoto.com/id/1337918159/photo/sorghum-and-also-known-as-great-millet-durra-jowari-jowar-milo-is-a-grass-grain.jpg?s=1024x1024&w=is&k=20&c=vBA9hfqMslX8Q_Q5PphzGiVdC-jZFMK45kFtiqhOjwQ=" ,
        price: 170,
        country: "India"
    },
    {
        name: "Shivam Singh",
        state: "Uttar Pradesh",
        city: "Lucknow",
        items: "Wheat",
        image:"https://media.istockphoto.com/id/1188375216/photo/wheat-ears-grains-and-bowl-of-flour-on-a-wooden-table.jpg?s=1024x1024&w=is&k=20&c=3c1nEPcpJtKf2xkOGW6ADAiS-QOm1Qvp1Womf4gh_WQ=",
        price: 160,
        country: "India"
    },
    {
        name: "Neha Joshi",
        state: "Madhya Pradesh",
        city: "Bhopal",
        items: "Mustard",
        image: "https://media.istockphoto.com/id/1835620130/photo/canola-flowers-in-the-field.webp?a=1&b=1&s=612x612&w=0&k=20&c=4eg1Lp49TGKskjrMTITIQF2abh4oVZEGeoDll1wgmOM=" ,
        price: 190,
        country: "India"
    },
    {
        name: "Karan Jain",
        state: "Rajasthan",
        city: "Jaipur",
        items: "Bajra", 
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEcS0Pyb96Z_5yOPSE4MlVgzC1DZSW6J4Zeg&s" ,
        price: 220,
        country: "India"
    },
    {
        name: "Lakshmi Menon",
        state: "Kerala",
        city: "Kochi",
        items: "Coconut", 
        image:"https://plus.unsplash.com/premium_photo-1675040830227-9f18e88fd1f9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29jb251dHxlbnwwfHwwfHx8MA%3D%3D" ,
        price: 300,
        country: "India"
    },
    {
        name: "Amrita Desai",
        state: "Maharashtra",
        city: "Mumbai",
        items: "Pomegranate", 
        image: "https://media.istockphoto.com/id/1979425666/photo/full-frame-image-of-produce-aisle-shelf-containing-pile-of-pomegranate-fruit-in-black-plastic.webp?a=1&b=1&s=612x612&w=0&k=20&c=1Opg9-AiK8twmeWcnS-UsevBKtBZ4WqQMH-8Z3TzjwA=",
        price: 250,
        country: "India"
    },
    {
        name: "Vikram Reddy",
        state: "Andhra Pradesh",
        city: "Guntur",
        items: "Chillies", 
        image:"https://images.unsplash.com/photo-1509085051020-b0707cdec216?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2hpbGxpfGVufDB8fDB8fHww" ,
        price: 275,
        country: "India"
    },
    {
        name: "Gopal Mehta",
        state: "Haryana",
        city: "Karnal",
        items: "Barley", 
        image:"https://plus.unsplash.com/premium_photo-1705404738459-c4cb25ad7933?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 240,
        country: "India"
    },
    {
        name: "Pankaj Sharma",
        state: "Uttarakhand",
        city: "Dehradun",
        items: "Tomatoes", 
        image:"https://images.unsplash.com/photo-1683008952458-dc02ac67f382?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dG9tYXRvJTIwZmFybXxlbnwwfHwwfHx8MA%3D%3D",
        price: 280,
        country: "India"
    },
    {
        name: "Vivek Thakur",
        state: "Himachal Pradesh",
        city: "Shimla",
        items: "Apples", 
        image:"https://images.unsplash.com/photo-1628486930972-c1db82d528da?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ,
        price: 300,
        country: "India"
    },
    {
        name: "Nisha Aggarwal",
        state: "Delhi",
        city: "New Delhi",
        items: "Oregano", 
        image:"https://media.istockphoto.com/id/1476054980/photo/organic-oregano-growing-in-a-garden.webp?a=1&b=1&s=612x612&w=0&k=20&c=PWAANu4tl92vM8MAb1AjUjHT_p1rKMqJyjRYsQ0r2oA=",
        price: 200,
        country: "India"
    },
    {
        name: "Rajesh Khanna",
        state: "West Bengal",
        city: "Kolkata",
        items: "Rice", 
        image:"https://plus.unsplash.com/premium_photo-1674654419403-1a80edb26881?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmljZXxlbnwwfHwwfHx8MA%3D%3D",
        price: 260,
        country: "India"
    },
    {
        name: "Sanjay Babu",
        state: "Tamil Nadu",
        city: "Chennai",
        items: "Sugarcane", 
        image:"https://media.istockphoto.com/id/93541349/photo/sugar-cane-plantation.webp?a=1&b=1&s=612x612&w=0&k=20&c=q-x3fulEUxWan5nnmS7PgUvqvuJfls40TKQlUUMeiDY=",
        price: 230,
        country: "India"
    },
    {
        name: "Anita Singh",
        state: "Bihar",
        city: "Patna",
        items: "Maize", 
        image:"https://media.istockphoto.com/id/1061097354/photo/the-corn-plant-in-the-field.jpg?s=1024x1024&w=is&k=20&c=T55nUS58QVPHTiJZmjQ51oh3iKOcbKMD0CF264JlZ_U=",
        price: 220,
        country: "India"
    },
    {
        name: "Pradeep Nair",
        state: "Kerala",
        city: "Thiruvananthapuram",
        items: "Coconut",
        image: "https://plus.unsplash.com/premium_photo-1675040830227-9f18e88fd1f9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29jb251dHxlbnwwfHwwfHx8MA%3D%3D" ,
        price: 310,
        country: "India"
    },
    {
        name: "Rohit Verma",
        state: "Jharkhand",
        city: "Ranchi",
        items: "Wheat",
        image:"https://media.istockphoto.com/id/1188375216/photo/wheat-ears-grains-and-bowl-of-flour-on-a-wooden-table.webp?a=1&b=1&s=612x612&w=0&k=20&c=RQLg4tAELmvuplyYU11n3OA9djn-F-RvT7VQJkboEvM=",
        price: 210,
        country: "India"
    },
    {
        name: "Satish Gowda",
        state: "Karnataka",
        city: "Mysore",
        items: "Millet", 
        image:"https://media.istockphoto.com/id/1874580268/photo/top-view-of-a-wooden-spoon-with-grain-millet-and-other-mixed-grains-on-it.webp?a=1&b=1&s=612x612&w=0&k=20&c=-tOAmdTI865S2TaCnxmBa2O2iyAJqPaHeq5Ys2mYfTc=",
        price: 230,
        country: "India"
    },
    {
        name: "Ritika Rathi",
        state: "Chhattisgarh",
        city: "Raipur",
        items: "Rice", 
        image:"https://plus.unsplash.com/premium_photo-1674654419403-1a80edb26881?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmljZXxlbnwwfHwwfHx8MA%3D%3D",
        price: 195,
        country: "India"
    },
    {
        name: "Ajay Chopra",
        state: "Punjab",
        city: "Ludhiana",
        items: "Maize", 
        image:"https://plus.unsplash.com/premium_photo-1675727577107-2e1311b5a9b6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWFpemUlMjBmaWVsZHxlbnwwfHwwfHx8MA%3D%3D" ,
        price: 210,
        country: "India"
    },
    {
        name: "Mohan Lal",
        state: "Rajasthan",
        city: "Udaipur",
        items: "Mustard", 
        image:"https://plus.unsplash.com/premium_photo-1683547021405-e59c4f65b335?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bXVzdGFyZCUyMGZpZWxkfGVufDB8fDB8fHww",
        price: 235,
        country: "India"
    },
    {
        name: "Sarita Devi",
        state: "Assam",
        city: "Guwahati",
        items: "Tea", 
        image:"https://plus.unsplash.com/premium_photo-1692049123825-8d43174c9c5c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dGVhJTIwZmllbGR8ZW58MHx8MHx8fDA%3D",
        price: 250,
        country: "India"
    },
    {
        name: "Sunil Chaudhary",
        state: "Bihar",
        city: "Gaya",
        items: "Wheat", 
        image:"https://images.unsplash.com/photo-1634662748890-6506b4884303?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 205,
        country: "India"
    },
    {
        name: "Manoj Pandey",
        state: "Uttar Pradesh",
        city: "Varanasi",
        items: "Rice", 
        image:"https://plus.unsplash.com/premium_photo-1674654419403-1a80edb26881?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmljZXxlbnwwfHwwfHx8MA%3D%3D",
        price: 220,
        country: "India"
    },
    {
        name: "Divya Bhatt",
        state: "Uttarakhand",
        city: "Nainital",
        items: "Apple", 
        image:"https://plus.unsplash.com/premium_photo-1661322640130-f6a1e2c36653?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGFwcGxlJTIwZmFybXxlbnwwfHwwfHx8MA%3D%3D",
        price: 275,
        country: "India"
    },
    {
        name: "Lakhan Yadav",
        state: "Haryana",
        city: "Hisar",
        items: "Barley", 
        image: "https://images.unsplash.com/photo-1632324348317-6be34550b729?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx8fGVufDB8fHx8fA%3D%3D",
        price: 110,
        country: "India"
    },
    {
        name: "Anil Thakur",
        state: "Himachal Pradesh",
        city: "Manali",
        items: "Walnuts", 
        image:"https://plus.unsplash.com/premium_photo-1668246589919-dbf9c742f471?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2FsbnV0cyUyMGluJTIwZmFybXxlbnwwfHwwfHx8MA%3D%3D",
        price: 320,
        country: "India"
    }
];

module.exports =  { data: farmersData };
