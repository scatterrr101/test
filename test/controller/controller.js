const test = require('../model/test');

module.exports.checkString = async (req, res) => {
    console.log("This is the request I am getting :: ", req.body);
    try {
        if (req.body.value === "" || req.body.value === undefined || req.body.value === null) {
            throw new Error("Please provide the sentence")   
        }

        if (req.body.value.length <= 1) {
            throw new Error("Cannot arrange the sentence in alphabetical order as it contains only one word")
        }

        if (req.body.value.length > 1) {
            let value = req.body.value.toLowerCase();
            // split the sentence into an array
            let splitData = value.split(" ");

            // sort the values in alphabetical order
            let sortData = splitData.sort();

            // join the elements of the array
            let finalData = sortData.join(" ");

            let payload = {
                incoming_message: req.body.value,
                saved_message: finalData
            };

            let result = await test.create(payload);

            if (result) {
                return {
                    message : "Created successfully !",
                    data: result
                }
            }
        }
    } catch (error) {
        return error.message;
    }
}