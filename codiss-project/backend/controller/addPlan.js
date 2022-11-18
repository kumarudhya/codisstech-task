
import Plan from '../model/planModel.js';

//register data in collection
const addPlan = (req, res) => {

    var newPlan = {
        price: req.body.price,
        vq: req.body.vq,
        resolution: req.body.resolution,

    }
    console.log(newPlan);

    async function createPlan() {

        try {
            var plan = await Plan.insertMany([newPlan])
            res.status(200).send(plan);



        }
        catch (error) {
            res.status(400).send(error.message)
        }
    } createPlan();
}

export { addPlan };