const express = require('express');
const app = express();
const PORT = 8000;
const {faker} = require('@faker-js/faker');

const User = () => ({
        _id:faker.datatype.uuid(),
        firstName:faker.name.firstName(),
        lastName:faker.name.lastName(),
        email:faker.internet.email(),
        phoneNumber:faker.phone.number(),
        password:faker.internet.password(),
});

const Company = () => ({
        _id:faker.datatype.uuid(),
        name:faker.company.companyName(),
        street:faker.address.streetAddress(),
        city:faker.address.cityName(),
        state:faker.address.state(),
        zipCode:faker.address.zipCode(),
        country:faker.address.country(),
});

app.get('/', (req, res) => {
    res.send('<h1>Hello World!!</h1>');
});
app.get('/api/users/new', (req, res) => {
    const newUser = User();
    res.json(newUser);
});
app.get('/api/companies/new', (req, res) => {
    const newCompany = Company();
    res.json(newCompany);
});
app.get('/api/user/company', (req, res) => {
    const newUser = User();
    const newCompany = Company();
    const userCompany = {
        user:newUser,
        company:newCompany,
    }
    res.json(userCompany);
});
app.listen(PORT, () => {
    console.log('Server is UP and Running on Port ${PORT}');
});
