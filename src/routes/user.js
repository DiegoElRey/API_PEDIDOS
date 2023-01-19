const express = require('express');
const user_schema = require('../models/user');
const router = express.Router();

//create user
/**
 * @swagger
 * components:
 *  schemas:
 *      user:
 *        type: object
 *        properties:
 *          user_name:
 *              type: string
 *              description: the user name
 *          user_mail:
 *              type: string
 *              description: the user mail
 *          user_password:
 *              type: string
 *              description: the user password
 *        required:
 *          - user_name
 *          - user_mail
 *          - user_password
 *        example:
 *          user_name: Diego
 *          user_mail: Diego@gmail.com
 *          user_password: 12345678d
 */
/**
 * @swagger
 * /api/user:
 *  post:
 *    summary: create a new user
 *    tags: [user]
 *    requestBody:
 *      required: true
 *      content:
 *          application/json:
 *              schema:
 *                  type: object
 *                  $ref: '#/components/schemas/user'
 *    responses:
 *      200:
 *        description: new user created!
 */
router.post('/user', (req, res) => {
    const user = user_schema(req.body);
    user
      .save()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
});

//get users
/**
 * @swagger
 * /api/user:
 *  get:
 *    summary: create a new user
 *    tags: [user]
 *    responses:
 *      200:
 *        description: all users
 *        content:
 *          application/json:
 *              schema:
 *                  type: array
 *                  items:
 *                      $ref: '#/components/schemas/user'
 */
router.get('/user', (req, res) => {
    user_schema
      .find()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
});

// get a user
/**
 * @swagger
 * /api/user/{id}:
 *  get:
 *    summary: create a new user
 *    tags: [user]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *          required: true
 *          description: the user id
 *    responses:
 *      200:
 *        description: return a user
 *        content:
 *          application/json:
 *              schema:
 *                  type: object
 *                  $ref: '#/components/schemas/user'
 *      404:
 *          description: user not found
 */
router.get('/user/:id', (req, res) => {
    const { id } = req.params;
    user_schema
      .findById(id)
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
});

// put a user
/**
 * @swagger
 * /api/user/{id}:
 *  put:
 *    summary: update a user
 *    tags: [user]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *          required: true
 *          description: the user id
 *    requestBody:
 *      required: true
 *      content:
 *          application/json:
 *              schema:
 *                  type: object
 *                  $ref: '#/components/schemas/user'
 *    responses:
 *      200:
 *        description: user updated!
 *      404:
 *          description: user not found
 */
router.put('/user/:id', (req, res) => {
    const { id } = req.params;
    const { user_name, user_password} = req.body;
    user_schema
      .updateOne({_id: id}, {$set: {user_name, user_password}})
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
});

// delete a user
/**
 * @swagger
 * /api/user/{id}:
 *  delete:
 *    summary: delete a user
 *    tags: [user]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *          required: true
 *          description: the user id
 *    responses:
 *      200:
 *        description: user deleted
 *      404:
 *          description: user not found
 */
router.delete('/user/:id', (req, res) => {
    const { id } = req.params;
    user_schema
      .remove({_id: id})
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
});

module.exports = router;