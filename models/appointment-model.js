module.exports = (sequelize, Sequelize) => {
    const Appointment = sequelize.define("tutorial", {
        name: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        phone: {
            type: Sequelize.INTEGER
        }
    });

    return Appointment;
};