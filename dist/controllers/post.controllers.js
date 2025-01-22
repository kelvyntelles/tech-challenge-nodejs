"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.update = exports.getOne = exports.getAll = exports.create = void 0;
const post_service_1 = require("../services/post.service");
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, content, author } = req.body;
    const post = yield (0, post_service_1.createPost)(title, content, author);
    res.status(201).json(post);
});
exports.create = create;
const getAll = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const posts = yield (0, post_service_1.getPosts)();
    res.json(posts);
});
exports.getAll = getAll;
const getOne = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const post = yield (0, post_service_1.getPostById)(Number(id));
    if (!post)
        return res.status(404).json({ message: 'Post not found' });
    res.json(post);
});
exports.getOne = getOne;
const update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { title, content } = req.body;
    const post = yield (0, post_service_1.updatePost)(Number(id), title, content);
    res.json(post);
});
exports.update = update;
const remove = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield (0, post_service_1.deletePost)(Number(id));
    res.status(204).send();
});
exports.remove = remove;
