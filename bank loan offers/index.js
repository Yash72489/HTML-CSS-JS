// A Salary of a Guy is 30000 and credit score required below 1000 to 650 , In that personal loan they offered rs 10,000,00 to a guy ,A guy want to pay a down payment around rs 50000 or guy want know about how many installment have required in that loan, and how much money paid in a month of installment?
//

let salary = +prompt('Enter your salary')
switch (salary) {
    case salary:
        if (salary === 30000) {
            let creditscore = +prompt('Enter your creditscore')
            switch (creditscore) {
                case creditscore:
                    if (creditscore <= 1000 && creditscore >= 650) {
                        console.log(1000000);
                        let payment = +prompt('down payment')
                        switch (payment) {
                            case payment:
                                if (payment === 50000) {
                                    let a = (1000000 - 50000);
                                    console.log(a);
                                }

                                break;

                            default:
                                break;
                        }
                        let installment = +prompt('Monthly installment')
                        switch (installment) {
                            case installment:
                                if (installment === 36) {
                                    let a = 950000 / 36;
                                    console.log(a);


                                } else if (installment === 24) {
                                    let b = 950000 / 24;
                                    console.log(b);


                                } else if (installment === 12) {
                                    let c = 950000 / 12;
                                    console.log(c);

                                }
                                else {
                                    console.log('Not Available');
                                }


                                break;

                            default:
                                console.log('wrong input');

                                break;
                        }



                    } else {

                        console.log('Not Available');
                    }


                    break;

                default:
                    console.log('wrong input');
                    break;
            }

        }

        break;

    default:
        console.log('wrong input');
        break;
}








