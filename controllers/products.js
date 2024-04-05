const getAllProducts = async(response, request)=>{
    response.status(200).json({msg:"hell i am get all products"})
};

const getAllProductsTesting = async(response, request)=>{
    response.status(200).json({msg:"hell i am get all productstesting"})
}; 

module.exports= {getAllProducts,getAllProductsTesting};