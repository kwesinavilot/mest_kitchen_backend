const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
    // Companies
    const foodBank = await prisma.organization.create({
        data: {
            orgID: "ORG0000012",
            name: 'Food Bank Inc',
            email: 'foodbank@example.com',
            phoneNumber: '23355500001',
            altNumber: '233541234568'
        }
    });

    const mealShare = await prisma.organization.create({
        data: {
            orgID: "ORG0000011",
            name: 'Meal Share Inc',
            email: 'mealshare@example.com',
            phoneNumber: '233550000258',
            altNumber: '233541234567'
        }
    });

    // Create some staff 
    await prisma.staff.create({
        data: {
            staffID: "STAFF00445",
            firstName: 'John',
            lastName: 'Doe',
            email: 'johndoe@example.com',
            phoneNumber: '55500003',
            role: 'Chef',
            orgID: mealShare.orgID,
        }
    });

    await prisma.staff.create({
        data: {
            staffID: "STAFF00446",
            firstName: 'Jane',
            lastName: 'Doe',
            email: 'janedoe@example.com',
            phoneNumber: '55500004',
            role: 'Cook',
            orgID: mealShare.orgID
        }
    });

    await prisma.staff.create({
        data: {
            staffID: "STAFF00550",
            firstName: 'Adwoa',
            lastName: 'Mansah',
            email: 'adwoa.mansah@foodbank.com',
            phoneNumber: '55500003',
            role: 'Chef',
            orgID: foodBank.orgID
        }
    });

    await prisma.staff.create({
        data: {
            staffID: "STAFF00551",
            firstName: 'Bob',
            lastName: 'Smith',
            email: 'bobsmith@@foodbank.com',
            phoneNumber: '55500004',
            role: 'Cook',
            orgID: foodBank.orgID
        }
    });

    // Create three members each for organizations
    await prisma.member.createMany({
        data: [
            {
                memberID: 'MEMB123456',
                orgID: foodBank.orgID,
                firstName: 'John',
                lastName: 'Doe',
                email: 'john.doe@foodbank.com',
                phoneNumber: '+1234567890',
                nationality: 'Ghanaian',
                preferences: ['lactose intolerant', 'pepper free'],
            },
            {
                memberID: 'MEMB234567',
                orgID: foodBank.orgID,
                firstName: 'Jane',
                lastName: 'Smith',
                email: 'jane.smith@foodbank.com',
                phoneNumber: '+1987654321',
                nationality: 'Ghanaian',
                preferences: ['vegetarian', 'gluten free'],
            },
            {
                memberID: 'MEMB345678',
                orgID: foodBank.orgID,
                firstName: 'Alice',
                lastName: 'Johnson',
                email: 'alice.johnson@foodbank.com',
                phoneNumber: '+1122334455',
                nationality: 'Ghanaian',
                preferences: ['vegan', 'nut free'],
            },
            {
                memberID: 'MEMB654321',
                orgID: mealShare.orgID,
                firstName: 'Michael',
                lastName: 'Brown',
                email: 'michael.brown@mealshare.com',
                phoneNumber: '+1122334455',
                nationality: 'Ghanaian',
                preferences: ['gluten free', 'peanut free'],
            },
            {
                memberID: 'MEMB765432',
                orgID: mealShare.orgID,
                firstName: 'Sophia',
                lastName: 'Wilson',
                email: 'sophia.wilson@mealshare.com',
                phoneNumber: '+1987654321',
                nationality: 'Ghanaian',
                preferences: ['vegetarian', 'lactose intolerant'],
            },
            {
                memberID: 'MEMB876543',
                orgID: mealShare.orgID,
                firstName: 'David',
                lastName: 'Martinez',
                email: 'david.martinez@mealshare.com',
                phoneNumber: '+1234567890',
                nationality: 'Ghanaian',
                preferences: ['vegan', 'soy free'],
            },
        ],
    });

    // Create admin 
    await prisma.admin.create({
        data: {
            adminID: 'ADMIN000200',
            firstName: 'Andrews',
            lastName: 'Ankomahene',
            email: 'andrews.ankomahene@choplog.com',
            phoneNumber: '233541173963',
            role: 'cto',

        }
    });

    console.log('Seed data created successfully!');
}

main()
    .catch((err) => {
        console.error('Error creating seed data:', err);
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    });