export default async (req, res) => {
    console.log(req.method);
    return res.json({hola : "hithere"});
}
