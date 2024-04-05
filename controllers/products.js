const getAllProducts = async(response, request)=>{
    request.status(200).json({msg:"hell i am get all products"});
};

const getAllProductsTesting = async(response, request)=>{
    request.status(200).json({ msg:"hello i am get all productstesting" });
}; 

module.exports = {getAllProducts,getAllProductsTesting};