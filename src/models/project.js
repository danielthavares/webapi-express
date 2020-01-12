const project = (sequelize, DataTypes) => {
  const Project = sequelize.define("project", {
    title: DataTypes.STRING,
    description: DataTypes.TEXT
  });

  return Project;
};

export default project;
