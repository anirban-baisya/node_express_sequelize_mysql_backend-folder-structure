module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        // here we specify singular name of our db table
        // so employee will be mapped to employee(s) by Sequelize
        'user',
        {
            userId: {
                type: DataTypes.BIGINT(20),
                primaryKey: true,
                autoIncrement: true
            },
            firstName: {
               type: DataTypes.STRING,
               allowNull: false
            },
            lastName: {
                type: DataTypes.STRING,
                allowNull: false
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            password: {
                type: DataTypes.STRING,
            },
            phoneNumber: {
                type: DataTypes.BIGINT(20),
                allowNull: false,
                validate: {
                    min: 6000000000,//No starting from no- 6 or between 9   + 10 digit speces
                    max: 9999999999 
                }
            },
            gender: {
                type: DataTypes.ENUM("M", "F")
            }
        }
    )
}