// export {};

// let name: string = "Toma";
// let age: number = 35;
// let proffesor: boolean = false;

// let profession: any = true;

// let grades: number[] = [1, 5, 6];
// let studenst: string[] = ["Petar", "Jelena"];

// let username: boolean | string = true; // drugacije se zove union tip

// // Napraviti niz koji moze skup string ili number tipa;
// let newArr: (number | string)[] = ["petar", 12];

// //Tuple = Fiksni niz: "string", number
// let info: [string, number] = ["petar", 12];

// interface UserInfo {
//   name: string;
//   age: number;
//   friends: string[];
// }

// let user1: UserInfo = {
//   name: "Petar",
//   age: 31,
//   friends: ["Marko", "Veljko"],
// };

// let user2: UserInfo = {
//   name: "Marko",
//   age: 25,
//   friends: ["Nenad", "Marija"],
// };

// // Vezba

// /**
//  *
//  * Mora se koristiti interface
//  *
//  * Niz objekata, gde svaki objekat sadrzi marku i model automobila
//  *
//  **/

// interface CarConfig {
//   engineVolume: number;
//   seats: number;
//   steering_wheel_side: string;
// }

// interface Car {
//   brand: string;
//   model: string;
//   config: CarConfig;
// }

// let cars: Car[] = [
//   {
//     brand: "Opel",
//     model: "Astra",
//     config: {
//       engineVolume: 2000,
//       seats: 5,
//       steering_wheel_side: "left",
//     },
//   },
//   {
//     brand: "BMW",
//     model: "Z4",
//     config: {
//       engineVolume: 2000,
//       seats: 5,
//       steering_wheel_side: "left",
//     },
//   },
// ];

// console.log(cars);

// const carListBtn = document.getElementById(
//   "show-cars-btn"
// ) as HTMLButtonElement;
// const carListDiv = document.getElementById("carlist") as HTMLDivElement;

// type carListType = {
//   brand: string;
//   model: string;
//   price: number;
//   vehicle_type: "car" | "bike";
// };

// const carList: carListType[] = [
//   {
//     brand: "audi",
//     model: "a4",
//     price: 40000,
//     vehicle_type: "car",
//   },
//   {
//     brand: "bmw",
//     model: "Z4",
//     price: 35000,
//     vehicle_type: "car",
//   },
//   {
//     brand: "yamaha",
//     model: "r1",
//     price: 10000,
//     vehicle_type: "bike",
//   },
// ];

// carListBtn.addEventListener("click", function () {
//   listCars(carList);

//   const mostExpensiveCar = getMostExpensiveCar(carList);
//   console.log(mostExpensiveCar);
// });

// /**
//  *
//  * ako funkcija vraca number stavljamo number, ako vraca string stavljamo string
//  *
//  * Ako funkcija baca gresku stavljamo never
//  * Ako funkcija ne vraca nista stavljamo void
//  * Funckija moze da vraca i union string | number
//  *
//  *
//  **/

// function listCars(carList: carListType[]): void {
//   for (let car of carList) {
//     const carP: HTMLParagraphElement = document.createElement("p");
//     carP.innerText = car.brand;
//     const carPrices = calculateCarPriceRange(car.brand);
//     const carPriceParagraph: HTMLParagraphElement = document.createElement("p");
//     carPriceParagraph.innerText = `Starting from ${carPrices[0]} to ${carPrices[1]}`;
//     carListDiv.append(carP, carPriceParagraph);
//   }
// }

// function addition(x1: number | string, x2: number | string): number | string {
//   if (typeof x1 === "string") {
//     return (x1 + x2).toString();
//   } else if (typeof x2 === "string") {
//     return (x1 + x2).toString();
//   }
//   return x1 + x2;
// }

// function calculate(n1: number, n2: number): number {
//   return n1 + n2;
// }

// function addFirstAndLastName(firstName: string, lastName: string): string {
//   return firstName + lastName;
// }

// function calculateCarPriceRange(carName: string): [number, number] {
//   let carString: string = carName.toLowerCase();
//   switch (carString) {
//     case "audi":
//       return [1000, 20000];
//     case "bmw":
//       return [5000, 25000];
//     default:
//       return [0, 100000];
//   }
// }

// function getMostExpensiveCar(cars: carListType[]): carListType | null {
//   if (cars.length === 0) return null;
//   return cars.reduce((maxPrice, currentCar) => {
//     return currentCar.price > maxPrice.price ? currentCar : maxPrice;
//   });
// }
