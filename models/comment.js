// Definición del modelo de Comment con validacion

module.exports = function(sequelize, DataTypes){
	return sequelize.define(
		'Comment',
		{ texto: {
			type: DataTypes.STRING,
			validate: {notEmpty: {msg: "-> Falta Comentario"}}
		},
		publicado:{
			type: DataTypes.BOOLEAN,
			defaultValue: false
		}
	}
  );
}