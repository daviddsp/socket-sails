/**
 * CommentariesController
 *
 * @description :: Server-side logic for managing Commentaries
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	index: (req, res) => {
		Commentaries.find(function(err, comment) {
					if (err) {return res.serverError(err);}

					return res.json(comment)
					//return res.view({users: users});
			});
	},

	create: (req, res) => {

		Commentaries.create({
          msj: req.param('msj')
        }).exec(function (err, newCommentarie) {

					return res.json(newCommentarie)

				});

	},

	



};
