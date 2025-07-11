
export default ()=>({
    MONGO_URI:process.env.MONGO_URI||'localhost:27017',
    PORT:process.env.PORT||3002,
})