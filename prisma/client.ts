import { PrismaClient } from "@prisma/client";

//Create the prisma client
const prismaClientSingleton = () => {
  return new PrismaClient();
};

//declare const - TypeScript declaration that modifies or extends the globalThis
// object(a global object in JavaScript)
//globalThis is also available in the Node.js environment is availability throughout the runtime

//& adds the existing type of global with new prismaGlobal added to the globalThis
//By adding prismaGlobal to the globalThis object you ensure there is only one instance
//of the prisma client running throughout the application

//
//Efficiency: Creating multiple instances of PrismaClient can lead
//to performance problems, especially in environments like Next.js
//where hot-reloading can lead to multiple client instances being created.
//By storing the instance in globalThis, you can reuse the same client instance,
//preventing issues like connection exhaustion with your database.

//
declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;
//ReturnType extracts the return type of the prismaClientSingleton function

//globalFor Prisma stores the prisma client singleton instance globally across our app
//
const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = prisma;
//if globalForPrisma.prisma already exists it would be used else
//a new client instance would be created
