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
exports.deletePost = exports.updatePost = exports.getPostById = exports.getPosts = exports.createPost = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const createPost = (title, content, author) => __awaiter(void 0, void 0, void 0, function* () {
    return prisma.post.create({
        data: { title, content, author },
    });
});
exports.createPost = createPost;
const getPosts = () => __awaiter(void 0, void 0, void 0, function* () {
    return prisma.post.findMany();
});
exports.getPosts = getPosts;
const getPostById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return prisma.post.findUnique({ where: { id } });
});
exports.getPostById = getPostById;
const updatePost = (id, title, content) => __awaiter(void 0, void 0, void 0, function* () {
    return prisma.post.update({
        where: { id },
        data: { title, content },
    });
});
exports.updatePost = updatePost;
const deletePost = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return prisma.post.delete({ where: { id } });
});
exports.deletePost = deletePost;
