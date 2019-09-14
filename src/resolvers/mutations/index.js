import {TraineeModel} from "../../models";

export const createTrainee = async (args) => {
	const {email} = args;

	const trainee = await TraineeModel.findOne({
		where: {
			email
		}
	});

	if (trainee) {
		throw new Error("User already exists");
	}

	const data = {
		...args,
		createdAt: new Date(),
		updatedAt: new Date()
	}

	const fields = Object.keys(data)
	const newTrainee = await TraineeModel.create(data, {fields});
	return newTrainee.dataValues
}