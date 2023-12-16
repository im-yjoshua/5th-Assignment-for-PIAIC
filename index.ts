import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})
{

  console.log("\t\t\t\t\nAssignment 4\n");
  // All the questions done in this assignment are done by using functions.

  // =========================================================================================
{

  console.log('Write a program that calculates the percentage.');

  function PercentageCalculator(array:number[], totalNumInArray: number): number {
    var SumofArray: number = array.reduce((acc, current) => acc + current, 0);
    var PercentageCalculating: number = (SumofArray / totalNumInArray) * 100;
    return PercentageCalculating

    
  }

  var arrayOfNum: number[] = [10, 20, 30, 40]
  console.log(`The percentage of [${arrayOfNum}] is => ${PercentageCalculator(arrayOfNum, 4)}%`)

}

  // =========================================================================================
{
  console.log('Write a program that calculates the discount for a product based on its price. If the price is above $100, apply a 10% discount; otherwise, apply a 5% discount.');

  rl.question("Enter product price: ", (userInpput) => {
    var productPrice = userInpput;

    function discountCalcualator(productPrice: number): any{
        if (productPrice >= 100) {
            var discount: number = (productPrice * 10) / 100;
            var discountedPrice: number = productPrice - discount;
            return `Your initial price was $${productPrice}. A discount of 10% is applied. Your total price is: $${(discountedPrice)}`
        } else if (productPrice < 100) {
            var discount: number = (productPrice * 5) / 100;
            var discountedPrice: number = productPrice - discount;
            return `Your initial price was $${productPrice}. A discount of 5% is applied. Your total price is: $${(discountedPrice)}`
        } else {
            return 'Sorry something went wrong. Please try again later!'
        }
    }

    console.log(discountCalcualator(Number(productPrice)));
        
    rl.close()
  })
}
  
  // =========================================================================================

{
  console.log('Create a program that determines the category of a user-provided age. If the age is between 0 and 12, print "Child". If its between 13 and 19, print "Teenager". Otherwise, prtin "Adult". ');

  rl.question("Enter your age: ", (userInput) => {
    var ageInput = userInput

    function AgeClassifier(Age:number): any {
        var age = Number(Age)
        if (age > 0 && age <= 12) {
            return `Your age is ${age} and is classfied as "Child"`
        } else if (age > 12 && age < 19) {
             return `Your age is ${age} and is classfied as "Teenager"`
        } if (age > 19 && age < 100) {
            return `Your age is ${age} and is classfied as "Adult"`
        } else {
            return 'Please enter your correct age!'
        }   
    }
    console.log(AgeClassifier(Number(ageInput)));
    rl.close()
  })
  }

  // =========================================================================================
{
  console.log('Write a program that takes temperature and check it. If it is cold then suggest the user to wear warm clothes and so on according to the weather.');

    // All temperatures are in Celsius. The ouput of the program will be calculated according to the following chart:
    // (0 ℃)  or 32 ℉   ==> *Extremely Cold*
    // (1 ℃)  or 33.8 ℉ , to (10 ℃)  or 50 ℉   ==>  *Cold*
    // (11 ℃)  or 51.8 ℉, to (20 ℃)  or 68 ℉   ==>  *Cold to Mild*
    // (21 ℃)  or 69.8 ℉ , to (30 ℃)  or 86 ℉   ==> *Warm*
    // (31 or above ℃)  or 87.8 ℉  ==> *Hot*


    rl.question("Enter temperature in Celsius: ", (userInput) => {
        var temperatureInput = userInput

        function TemperatureChecker(temperature:number): any {
            if (temperature === 0) {
                return `${temperature}℃  is Extremely Cold. You should wear:\n*Heavy winter coat.\n*Insulated gloves.\n*Hat, Scarf, Thermal layers.\n*Insulated and waterproof boots.`
            } else if (temperature > 0 && temperature <= 10) {
                return `${temperature}℃  is Cold. You should wear:\n*Winter coat or heavy jacket.\n*Layers underneath.\n*Gloves, Hat, Scarf.\n*Boots or sturdy shoes.`
            } else if (temperature > 10 && temperature <= 20) {
                return `${temperature}℃  is Cold to Mildly Cold. You should wear:\n*Medium-weight jacket or sweater.\n*Long sleeves or layers.\n*Comfortable jeans or pants.\n*Closed-toe shoes or sneakers.`
            } else if (temperature > 20 && temperature <= 30) {
                return `${temperature}℃  is Warm. You should wear:\n*Lighter clothing i.e. t-shirts, shorts, skirts.\n*Sunglasses, hat, sunscreen.\n*Comfortable walking shoes.`
            } else if (temperature > 30 && temperature <= 50) {
                return `${temperature}℃  is so Hot. You should wear:\n*Lightweight and breathable clothing i.e. - shorts, tank tops, summer dresses.\n*Sunglasses, sunscreen, wide-brimmed hat\n*.Sandals or breathable shoes`
            } else {
                return `${temperature}℃  is not a logical temperature. Please enter correct temperature!`
            }
            
        }

        console.log(TemperatureChecker(Number(temperatureInput)));
        rl.close()
    })
  }

  // =========================================================================================

{
  console.log('Write a program that checks if the given number is divisible by 3 or 5 or both or not divisible by anyone. Show output accordingly');

  rl.question("Enter a number: ", (userInput) => {
    var numberInput = userInput

    function NumberChecker(number:any): any {
        if (Number(number) % 3 !== 0 && Number(number) % 5 !== 0)  {
            return `[${number}] is neither divisble by both 3 and 5.`
        }else if (Number(number) % 3 === 0 && Number(number) % 5 === 0)  {
            return `[${number}] is divisble by both 3 and 5.`
        } else if (Number(number) % 3 === 0) {
            return `[${number}] is divisble by 3.`
        } else if (Number(number) % 5 === 0) {
            return `[${number}] is divisble by 5.`
        } else {
            return 'Something went Wrong. Please check your input!'
        }
    }

    console.log(NumberChecker(numberInput));
    rl.close()
    
  })
  }

  // =========================================================================================
{
  console.log('Write a program checks if the given year is leap year or not');

  rl.question("Enter an year: ", (userInput) => {
    var yearInput = userInput
    
    function LeapYearChecker(year:number): boolean {
        if (year % 4 !== 0) {
            return false;
        } else if (year % 100 !== 0) {
            return true;
        } else if (year % 400 !== 0) {
            return false;
        } else {
            return true;
        }
    }
    
    if (LeapYearChecker(Number(yearInput))) {
        console.log(`${yearInput} is a leap year!`);
    } else {
        console.log(`${yearInput} is not a leap year!`);
    }
  rl.close()  
})
  }

  // =========================================================================================
{
  console.log("Develop a program that determines the day of the week. Ask the user for a number (1-7) and uses nested if statements to print the corresponding day's name.\n");

  rl.question("Enter a number between (1-7): ", (userInput) => {
    var dayInput = userInput

    function WeekDaysChecker(day:number): any {
        if (day >= 1 && day <= 7) {
            if (day === 1){
                return 'It is Monday'
            } else if (day === 2) {
                return 'It is Tuesday'
            } else if (day === 3) {
                return 'It is Wednesday'
            } else if (day === 4) {
                return 'It is Thursday'
            } else if (day === 5) {
                return 'It is Friday'
            } else if (day === 6) {
                return 'It is Saturday'
            } else if (day === 7) {
                return 'It is Sunday'
            }
        } else {
            return `Wrong Input! Please check your Input => ${day}`
        }
        
    }
    console.log(WeekDaysChecker(Number(dayInput)));
    rl.close()
    
  })
  }

  // =========================================================================================

  {
    console.log("Write a program that takes the number of units consumed by a user if it is greater than 100 then add 10% tax if greater than 200 then add 15% of tax and so on up to if greater than 500 then add 25% of tax. Where the tax amount will be calculated by the amount of bill.");

    rl.question("Enter the number of Units used this month: ", (userInput) => {
        var unitInput = userInput

        function BillCalculator(unit:number): any {
            var InitialPriceOfUnit: number = 2;  // // in Dollars
            if (unit > 0 && unit < 100) {
                var beforetaxPrice: number = unit * InitialPriceOfUnit;
                var taxCalculation: number = (beforetaxPrice * 5) / 100;
                var totalbill: number = beforetaxPrice + taxCalculation;
                return `The initial price per unit was $${InitialPriceOfUnit}. You used ${unit} units this month. A tax of 5% has been added (as per law). Your total bill is $${totalbill}.`
             } else if (unit > 100 && unit < 200) {
                var beforetaxPrice: number = unit * InitialPriceOfUnit;
                var taxCalculation: number = (beforetaxPrice * 10) / 100;
                var totalbill: number = beforetaxPrice + taxCalculation;
                return `The initial price per unit was $${InitialPriceOfUnit}. You used ${unit} units this month. A tax of 10% has been added (as per law). Your total bill is $${totalbill}.`
             } else if (unit > 200 && unit < 500) {
                var beforetaxPrice: number = unit * InitialPriceOfUnit;
                var taxCalculation: number = (beforetaxPrice * 15) / 100;
                var totalbill: number = beforetaxPrice + taxCalculation;
                return `The initial price per unit was $${InitialPriceOfUnit}. You used ${unit} units this month. A tax of 15% has been added (as per law). Your total bill is $${totalbill}.`
             } else if (unit > 500) {
                var beforetaxPrice: number = unit * InitialPriceOfUnit;
                var taxCalculation: number = (beforetaxPrice * 25) / 100;
                var totalbill: number = beforetaxPrice + taxCalculation;
                return `The initial price per unit was $${InitialPriceOfUnit}. You used ${unit} units this month. A tax of 25% has been added (as per law). Your total bill is $${totalbill}.`
             } else {
                return 'Something went wrong! Please check your input.'
             }
        }

        console.log(BillCalculator(Number(unitInput)));
        rl.close()
    
    })
  }

  // =========================================================================================
{
  console.log("Write a program that tells if the student is pass or fail based on the attendance greater than 75%, practical marks should be greater than 50% and theory marks should be greater than 45% for passing in a semester.");

  rl.question('Enter your attendence percentage: ', (userInput) => {
    var attendanceInput = userInput
    rl.question('Enter your practical marks percentage: ', (userInput2) => {
        var practicalInput = userInput2
        rl.question('Enter your theory marks percentage: ', (userInput3) => {
            var theoryInput = userInput3
            
            function ResultAnnouncementBot(attendance: number, practicalmarks: number, theorymarks: number): any | undefined {
                // Declaring passing criteria
                var toPassAttendence: number = 75;
                var toPassPractical: number = 50;
                var toPasstheory: number = 45;

                if ((attendance >= toPassAttendence && attendance < 100) && (practicalmarks >= toPassPractical && practicalmarks < 100) && (theorymarks >= toPasstheory && theorymarks < 100)) {
                            return `Congrats🎉you have passed this session with ${attendance}% attendence, ${practicalmarks}% practical marks, and ${theorymarks}% theory marks.`
                } else if ((attendance < toPassAttendence && attendance < 100) && (practicalmarks < toPassPractical && practicalmarks < 100) && (theorymarks < toPasstheory && theorymarks < 100)) {
                            return `Unfortunately, you have failed completely in this session with ${attendance}% attendence, ${practicalmarks}% practical marks, and ${theorymarks}% theory marks.`
                } else if ((attendance > toPassAttendence && attendance < 100) && (practicalmarks < toPassPractical && practicalmarks < 100) && (theorymarks < toPasstheory && theorymarks < 100)) {
                            return `Unfortunately, you have failed this session because of not enough marks in practical and theory. With ${attendance}% attendence, ${practicalmarks}% practical marks, and ${theorymarks}% theory marks.`
                } else if ((attendance < toPassAttendence && attendance < 100) && (practicalmarks > toPassPractical && practicalmarks < 100) && (theorymarks < toPasstheory && theorymarks < 100)){
                            return `Unfortunately, you have failed this session because of less attendence and not enough marks in theory. With ${attendance}% attendence, ${practicalmarks}% practical marks, and ${theorymarks}% theory marks.`
                } else if ((attendance < toPassAttendence && attendance < 100) && (practicalmarks < toPassPractical && practicalmarks < 100) && (theorymarks > toPasstheory && theorymarks < 100)){
                            return `Unfortunately, you have failed this session because of less attendence and not enough marks in practical. ith ${attendance}% attendence, ${practicalmarks}% practical marks, and ${theorymarks}% theory marks.`
                } else {
                    return `Something went wrong. Please check your input!`
                }
            } 
            console.log(ResultAnnouncementBot(Number(attendanceInput), Number(practicalInput), Number(theoryInput)));
            rl.close()              
        })
    })
})
}

  // =========================================================================================

{
    console.log("Write a ts program that evaluates the grades of the students: *mentioned in the question*");

  // 80% or greater === grade A
  // 70% or greater === grade B
  // 60% or greater === grade C
  // 50% or greater === grade D
  // Less than  50% === grade F
  

  rl.question("Enter your percentage in exams: ", (userInput) => {
    var percentageInput = userInput

    function GradeClassifier(grades:number): any {
        if (grades >= 80 && grades <= 100) {
        return `Congrats, you got A grade in this semester!`
        } else if (grades >= 70 && grades < 80) {
            return `You got B grade in this semester! Better luck next time`
        } else if (grades >= 60 && grades < 70) {
            return `You got C grade in this semester! You can do much better!!`
        } else if (grades >= 50 && grades < 60) {
            return `You got D grade in this semester! It's okay, better luck next time.`
        } else if (grades < 50 && grades > 0) {
            return `You got F grade in this semester! Don't worry, keep it up!!`
        } else {
            return 'Something went wrong. Please check your input!'
        }
    }

    console.log(GradeClassifier(Number(percentageInput)));
    rl.close()
  })
  }

  // =========================================================================================
  console.log('Assingment 4 questions start here');
  // =========================================================================================

{
  console.log('Develop a program that determines the day of the week. From number 1 to 5 it should print day name Monday to Friday respectively and for 6 it should print weekend. Do it using switch statement.');

  rl.question("Enter any number (between 1-7): ", (userInput) => {
    var dayInput = userInput

    function DayClassifier(day:number): any {
        switch (day) {
            case 1:
                return 'It is Monday';
            case 2:
                return 'It is Tuesday';
            case 3:
                return 'It is Wednesday';
            case 4:
                return 'It is Thursday';
            case 5:
                return 'It is Friday';
            case 6:
                return 'It is Weekend';                                                                
            default:
                return 'Something went wrong. Please check your input!'
        }        
    }

    console.log(DayClassifier(Number(dayInput)));
    rl.close()
  })
  }
  
  // =========================================================================================

  {
    console.log("Try making ATM machine that matches pin and account number in it. If matches then user can withdraw amount. And if he or she hasn't sufficient balance show them a message. Show message for wrong acocount number and wrong pin separately.");

    var users_name: string = "Imran Khan";
    var balanceInAccount: number = 50000;
    var accountNumber: string = "9876";

    rl.question("Enter account number: ", (accountInput) => {
        accountNumber = accountInput

        switch (accountNumber) {
            case '9876':
                rl.question("Enter your Pin: ", (pinInput) => {
                    var pin = pinInput
                    if (pin === '1234') {
                        console.log(`Welcome ${users_name}`);
                        rl.question("Enter the amount you want to withdraw: ", (amountInput) =>{
                            if (Number(amountInput) < balanceInAccount) {
                                if (Number(amountInput) > 100 && Number(amountInput) <= 10000) {
                                    var new_balance: number = balanceInAccount - Number(amountInput)
                                    console.log('Please wait while we process your transaction.');
                                    console.log(`Your transaction was succesfull. Your remaining balance is Rs. ${new_balance}.`);
                                    console.log('Thanks for using our service.');                                 
                                } else {
                                    console.log('Please enter a correct amount between (100 - 10000).');
                                }
                            } else {
                                console.log('Unfortunately, your account has insufficient balance!');                                
                            }
                            rl.close()
                        })
                    } else {
                        console.log('Please enter correct pin!');
                    }
                })                                
                break;
        
            default:
                console.log('Please enter correct account number!');        
                break;
        }  
    })
    
  }

  // =========================================================================================

{
  console.log('Write a ts program that prints message like "Good Morning" etc depending on time use hours only for now. Do it with both if else and switch statement');

  var  time = new Date()
  var hours = time.getHours()
  var name = 'Imran Khan'

//   Function is using if/else statements to print the message

  function MessagePlayerusingIfElse(hours:number): any {
	if (hours >= 4 && hours < 12) {
	    return `Good Morning ${name}`
	  } else if (hours >= 12 && hours < 16) {
	     return `Good Afternoon ${name}`
	  } else if (hours >= 16 && hours < 22){
	     return `Good Evening ${name}`
	  } else{
	     return `Good Night ${name}`
	  }
    }

    console.log(MessagePlayerusingIfElse(hours));
    
//   Function is using switch statement to print the message

function MessagePlayerUsingSwitch(hours:number): any {
    switch (hours) {
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
            return `Good Morning ${name}`;
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
            return `Good Afternoon ${name}`;
        case 17:
        case 18:
        case 19:
        case 20:
            return `Good Evening ${name}`;
        case 21:
        case 22:
        case 23:
        case 24:
        case 0:
        case 1:
        case 2:
        case 3:
            return `Good Night ${name}`;
        default:
            return 'Something went wrong!';
    }    
}
    
    console.log(MessagePlayerUsingSwitch(hours));
    
}

  // =========================================================================================

  console.log('Write a program that prints the name of study for a person for instance middle, matric etc from playgroup to PhD on basis of class number.');

  rl.question("Enter your class: ", (userInput) => {
    var classInput = userInput

    function ClassClassifier(classNumber:number): any {
        if (classNumber >= 0 && classNumber <= 20) {
            var className: string;
            if (classNumber === 0) {
                className = 'Playgroup';
            } else if (classNumber >= 1 && classNumber <= 8) {
             if (classNumber === 1) {
                className = 'Class 1';
                return `It is ${className} and lies within middle section.`
            } else if (classNumber === 2) {
                className = 'Class 2';
                return `It is ${className} and lies within middle section.`
            } else if (classNumber === 3) {
                className = 'Class 3';
                return `It is ${className} and lies within middle section.`
            } else if (classNumber === 4) {
                className = 'Class 4';
                return `It is ${className} and lies within middle section.`
            } else if (classNumber === 5) {
                className = 'Class 5';
                return `It is ${className} and lies within middle section.`
            } else if (classNumber === 6) {
                className = 'Class 6';
                return `It is ${className} and lies within middle section.`
            } else if (classNumber === 7) {
                className = 'Class 7';
                return `It is ${className} and lies within middle section.`
            } else if (classNumber === 8) {
                className = 'Class 8';
                return `It is ${className} and lies within middle section.`
            }
        } else if (classNumber >= 9 && classNumber <= 10) {
            if (classNumber === 9) {
                className = '9th Class';
                return `It is ${className} and lies within matric section.`
            } else if (classNumber === 10) {
                className = '10th Class';
                return `It is ${className} and lies within matric section.`
            }
        } else if (classNumber >= 11 && classNumber <= 12) {
            if (classNumber === 11) {
                className = '11th Class';
                return `It is ${className} and lies within intermidiate section.`
            } else if (classNumber === 12) {
                className = '12th Class';
                return `It is ${className} and lies within intermidiate section.`
            }
        } else if (classNumber >= 13 && classNumber <= 14) {
            if (classNumber === 13) {
                className = '13th Class';
                return `It is ${className} and lies within bachelor's section.`
            } else if (classNumber === 14) {
                className = '14th Class';
                return `It is ${className} and lies within bachelor's section.`
            }
        } else if (classNumber >= 15 && classNumber <= 16) {
            if (classNumber === 15) {
                className = '15th Class';
                return `It is ${className} and lies within master's section.`
            } else if (classNumber === 16) {
                className = '16th Class';
                return `It is ${className} and lies within master's section.`
            }
        } else if (classNumber >= 17 && classNumber <= 18) {
            if (classNumber === 17) {
                className = '17th Class';
                return `It is ${className} and lies within M-phil section.`
            } else if (classNumber === 18) {
                className = '18th Class';
                return `It is ${className} and lies within M-phil section.`
            }
        } else if (classNumber >= 19 && classNumber <= 20) {
            if (classNumber === 19) {
                className = '19th Class';
                return `It is ${className} and lies within PHD section.`
            } else if (classNumber === 20) {
                className = '20th Class';
                return `It is ${className} and lies within PHD section.`
            }
        }
    } else {
        return 'Please enter a correct number between (0-20)'
    }
        
    }
    rl.close()

    console.log(ClassClassifier(Number(classInput)));
    
  })

  
  // =========================================================================================

  console.log('Write a TS program that check wheather if the number is positive, zero or negative.');

  rl.question("Enter a number: ", (userInput) => {
    var numberInput = userInput

    function NumberChecker(number:number): any {
        if (number > 0) {
            return `${number} is positive`
        } else if (number < 0) {
            return `${number} is negative`
        } else if (number === 0) {
            return `${number} is zero`
        } else {
            return `Please check your input!`
        }
    }

    console.log(NumberChecker(Number(numberInput)));
    
    rl.close()
  })  

  // =========================================================================================

  console.log("Take 5 different numbers and check which one is greatest and then check which one is smallest use separate conditionals for both scenarios.");


  rl.question("Enter first number:", (firstInput) => {
    var firstnum = firstInput
    rl.question("Enter second number: ", (secondInput) => {
        var secondnum = secondInput
        rl.question("Enter third number: ", (thirdInput) => {
            var thirdnum = thirdInput
            rl.question("Enter fourth number: ", (fourthInput) => {
                var fourthnum = fourthInput
                rl.question("Enter fifth number: ", (fifthInput) => {
                    var fifthnum = fifthInput
                    var array: any[] = [Number(firstnum), Number(secondnum), Number(thirdnum) , Number(fourthnum) , Number(fifthnum)]


                    function CheckWhichNumberisGreater(array: number[]): any {
                        
                            // // For checking the largest number.
                            if (firstnum > secondnum && firstnum > thirdnum && firstnum > fourthnum && firstnum > fifthnum) {
                            return `First input => ${firstnum} is greater than the rest of numbers.`
                            } else if (secondnum > firstnum && secondnum > thirdnum && secondnum > fourthnum && secondnum > fifthnum) {
                            return `Second input => ${secondnum} is greater than the rest of numbers.`
                            }else if (thirdnum > firstnum && thirdnum > secondnum && thirdnum > fourthnum && thirdnum > fifthnum) {
                            return `Third input => ${thirdnum} is greater than the rest of numbers.`
                            }else if (fourthnum > firstnum && fourthnum > secondnum && fourthnum > thirdnum && fourthnum > fifthnum) {
                            return `Fourth input => ${fourthnum} is greater than the rest of numbers.`
                            } else if (fifthnum > firstnum && fifthnum > secondnum && fifthnum > thirdnum && fifthnum > fourthnum) {
                            return `Fifth input => ${fifthnum} is greater than the rest of numbers.`
                            }
                            // // For checking the smallest number.
                            if (firstnum < secondnum && firstnum < thirdnum && firstnum < fourthnum && firstnum < fifthnum) {
                            return `First input => ${firstnum} is smaller than the rest of numbers.`
                            } else if (secondnum < firstnum && secondnum < thirdnum && secondnum < fourthnum && secondnum < fifthnum) {
                            return `Second input => ${secondnum} is smaller than the rest of numbers.`
                            }else if (thirdnum < firstnum && thirdnum < secondnum && thirdnum < fourthnum && thirdnum < fifthnum) {
                            return `Third input => ${thirdnum} is smaller than the rest of numbers.`
                            }else if (fourthnum < firstnum && fourthnum < secondnum && fourthnum < thirdnum && fourthnum < fifthnum) {
                            return `Fourth input => ${fourthnum} is smaller than the rest of numbers.`
                            }else if (fifthnum < firstnum && fifthnum < secondnum && fifthnum < thirdnum && fifthnum <fourthnum) {
                            return `Fifth input => ${fifthnum} is smaller than the rest of numbers.`
                            } else {
                            return `Something went wrong. Please check your input => [${array}]`
                            }
                        
                            }
                 rl.close()

                console.log(CheckWhichNumberisGreater(array));
                
                

                })
            })
        })
    })
  })
}
