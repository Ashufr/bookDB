import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	author: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
	genre: {
		type: String,
		required: true,
	},
	releasDate: {
		type: Date,
	},
	publisher: {
		type: String,
		required: true,
	},
	language: {
		type: String,
		required: true,
	},
	length: {
		type: Number,
		required: true,
	},
	imageURL: {
		type: String,
		required: true,
	},
	isbn10: {
		type: String,
		required: true,
        unique: true,
	},
	isbn13: {
		type: String,
		required: true,
        unique: true,
	}
});

const Book = mongoose.models["books"] || mongoose.model("books", bookSchema);

export default Book;
