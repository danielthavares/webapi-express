const task = (sequelize, DataTypes) => {
  const Task = sequelize.define("task", {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    deadline: DataTypes.DATE
  });

  return Task;
};

export default task;
