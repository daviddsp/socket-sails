/**
 * Commentaries.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  schema: true, 

  attributes: {
    author: {          // Campo author
          type: 'string',  // String
          required: true   // Obligatorio
    },
    text: {            // Campo text
      type: 'string',  // String
      required: true   // Obligatorio
    }
  },

  afterCreate: function(message, next) {
      Sails.io.sockets.emit('new message', message);
      next();
  }
};
