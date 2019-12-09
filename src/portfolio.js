import React from 'react'
import { Route } from 'react-router-dom'
import { Box } from './box'

export const navigationItems = [
  {
    to: '/portfolio/number',
    label: 'Number',
    subItems: [
      {
        to: '/portfolio/number/#find-pi-to-the-nth-digit',
        label: 'Find PI to the Nth Digit',
      },
      {
        to: '/portfolio/number/#fibonacci-sequence',
        label: 'Fibonacci Sequence',
      },
      {
        to: '/portfolio/number/#prime-factorization',
        label: 'Prime Factorization',
      },
    ],
  },
  {
    to: '/portfolio/classic-algorithms',
    label: 'Classic Algorithms',
    subItems: [],
  },
  {
    to: '/portfolio/graph',
    label: 'Graph',
    subItems: [],
  },
  {
    to: '/portfolio/data-structures',
    label: 'Data Structures',
    subItems: [],
  },
  {
    to: '/portfolio/text',
    label: 'Text',
    subItems: [],
  },
  {
    to: '/portfolio/networking',
    label: 'Networking',
    subItems: [],
  },
  {
    to: '/portfolio/classes',
    label: 'Classes',
    subItems: [],
  },
  {
    to: '/portfolio/threading',
    label: 'Threading',
    subItems: [],
  },
  {
    to: '/portfolio/web',
    label: 'Web',
    subItems: [],
  },
  {
    to: '/portfolio/files',
    label: 'Files',
    subItems: [],
  },
  {
    to: '/portfolio/databases',
    label: 'Databases',
    subItems: [],
  },
  {
    to: '/portfolio/graphics-and-multimedia',
    label: 'Graphics and Multimedia',
    subItems: [],
  },
  {
    to: '/portfolio/security',
    label: 'Security',
    subItems: [],
  },
]

export function Portfolio() {
  return (
    <Route path="/portfolio">
      <Box p={['0px', 4, 8]}>
        Find PI to the Nth Digit - Enter a number and have the program generate
        PI up to that many decimal places. Keep a limit to how far the program
        will go. Find e to the Nth Digit - Just like the previous problem, but
        with e instead of PI. Enter a number and have the program generate e up
        to that many decimal places. Keep a limit to how far the program will
        go. Fibonacci Sequence - Enter a number and have the program generate
        the Fibonacci sequence to that number or to the Nth number. Prime
        Factorization - Have the user enter a number and find all Prime Factors
        (if there are any) and display them. Next Prime Number - Have the
        program find prime numbers until the user chooses to stop asking for the
        next one. Find Cost of Tile to Cover W x H Floor - Calculate the total
        cost of tile it would take to cover a floor plan of width and height,
        using a cost entered by the user. Mortgage Calculator - Calculate the
        monthly payments of a fixed term mortgage over given Nth terms at a
        given interest rate. Also figure out how long it will take the user to
        pay back the loan. For added complexity, add an option for users to
        select the compounding interval (Monthly, Weekly, Daily, Continually).
        Change Return Program - The user enters a cost and then the amount of
        money given. The program will figure out the change and the number of
        quarters, dimes, nickels, pennies needed for the change. Binary to
        Decimal and Back Converter - Develop a converter to convert a decimal
        number to binary or a binary number to its decimal equivalent.
        Calculator - A simple calculator to do basic operators. Make it a
        scientific calculator for added complexity. Unit Converter (temp,
        currency, volume, mass and more) - Converts various units between one
        another. The user enters the type of unit being entered, the type of
        unit they want to convert to and then the value. The program will then
        make the conversion. Alarm Clock - A simple clock where it plays a sound
        after X number of minutes/seconds or at a particular time. Distance
        Between Two Cities - Calculates the distance between two cities and
        allows the user to specify a unit of distance. This program may require
        finding coordinates for the cities like latitude and longitude. Credit
        Card Validator - Takes in a credit card number from a common credit card
        vendor (Visa, MasterCard, American Express, Discoverer) and validates it
        to make sure that it is a valid number (look into how credit cards use a
        checksum). Tax Calculator - Asks the user to enter a cost and either a
        country or state tax. It then returns the tax plus the total cost with
        tax. Factorial Finder - The Factorial of a positive integer, n, is
        defined as the product of the sequence n, n-1, n-2, ...1 and the
        factorial of zero, 0, is defined as being 1. Solve this using both loops
        and recursion. Find PI to the Nth Digit - Enter a number and have the
        program generate PI up to that many decimal places. Keep a limit to how
        far the program will go. Find e to the Nth Digit - Just like the
        previous problem, but with e instead of PI. Enter a number and have the
        program generate e up to that many decimal places. Keep a limit to how
        far the program will go. Fibonacci Sequence - Enter a number and have
        the program generate the Fibonacci sequence to that number or to the Nth
        number. Prime Factorization - Have the user enter a number and find all
        Prime Factors (if there are any) and display them. Next Prime Number -
        Have the program find prime numbers until the user chooses to stop
        asking for the next one. Find Cost of Tile to Cover W x H Floor -
        Calculate the total cost of tile it would take to cover a floor plan of
        width and height, using a cost entered by the user. Mortgage Calculator
        - Calculate the monthly payments of a fixed term mortgage over given Nth
        terms at a given interest rate. Also figure out how long it will take
        the user to pay back the loan. For added complexity, add an option for
        users to select the compounding interval (Monthly, Weekly, Daily,
        Continually). Change Return Program - The user enters a cost and then
        the amount of money given. The program will figure out the change and
        the number of quarters, dimes, nickels, pennies needed for the change.
        Binary to Decimal and Back Converter - Develop a converter to convert a
        decimal number to binary or a binary number to its decimal equivalent.
        Calculator - A simple calculator to do basic operators. Make it a
        scientific calculator for added complexity. Unit Converter (temp,
        currency, volume, mass and more) - Converts various units between one
        another. The user enters the type of unit being entered, the type of
        unit they want to convert to and then the value. The program will then
        make the conversion. Alarm Clock - A simple clock where it plays a sound
        after X number of minutes/seconds or at a particular time. Distance
        Between Two Cities - Calculates the distance between two cities and
        allows the user to specify a unit of distance. This program may require
        finding coordinates for the cities like latitude and longitude. Credit
        Card Validator - Takes in a credit card number from a common credit card
        vendor (Visa, MasterCard, American Express, Discoverer) and validates it
        to make sure that it is a valid number (look into how credit cards use a
        checksum). Tax Calculator - Asks the user to enter a cost and either a
        country or state tax. It then returns the tax plus the total cost with
        tax. Factorial Finder - The Factorial of a positive integer, n, is
        defined as the product of the sequence n, n-1, n-2, ...1 and the
        factorial of zero, 0, is defined as being 1. Solve this using both loops
        and recursion. Find PI to the Nth Digit - Enter a number and have the
        program generate PI up to that many decimal places. Keep a limit to how
        far the program will go. Find e to the Nth Digit - Just like the
        previous problem, but with e instead of PI. Enter a number and have the
        program generate e up to that many decimal places. Keep a limit to how
        far the program will go. Fibonacci Sequence - Enter a number and have
        the program generate the Fibonacci sequence to that number or to the Nth
        number. Prime Factorization - Have the user enter a number and find all
        Prime Factors (if there are any) and display them. Next Prime Number -
        Have the program find prime numbers until the user chooses to stop
        asking for the next one. Find Cost of Tile to Cover W x H Floor -
        Calculate the total cost of tile it would take to cover a floor plan of
        width and height, using a cost entered by the user. Mortgage Calculator
        - Calculate the monthly payments of a fixed term mortgage over given Nth
        terms at a given interest rate. Also figure out how long it will take
        the user to pay back the loan. For added complexity, add an option for
        users to select the compounding interval (Monthly, Weekly, Daily,
        Continually). Change Return Program - The user enters a cost and then
        the amount of money given. The program will figure out the change and
        the number of quarters, dimes, nickels, pennies needed for the change.
        Binary to Decimal and Back Converter - Develop a converter to convert a
        decimal number to binary or a binary number to its decimal equivalent.
        Calculator - A simple calculator to do basic operators. Make it a
        scientific calculator for added complexity. Unit Converter (temp,
        currency, volume, mass and more) - Converts various units between one
        another. The user enters the type of unit being entered, the type of
        unit they want to convert to and then the value. The program will then
        make the conversion. Alarm Clock - A simple clock where it plays a sound
        after X number of minutes/seconds or at a particular time. Distance
        Between Two Cities - Calculates the distance between two cities and
        allows the user to specify a unit of distance. This program may require
        finding coordinates for the cities like latitude and longitude. Credit
        Card Validator - Takes in a credit card number from a common credit card
        vendor (Visa, MasterCard, American Express, Discoverer) and validates it
        to make sure that it is a valid number (look into how credit cards use a
        checksum). Tax Calculator - Asks the user to enter a cost and either a
        country or state tax. It then returns the tax plus the total cost with
        tax. Factorial Finder - The Factorial of a positive integer, n, is
        defined as the product of the sequence n, n-1, n-2, ...1 and the
        factorial of zero, 0, is defined as being 1. Solve this using both loops
        and recursion. Find PI to the Nth Digit - Enter a number and have the
        program generate PI up to that many decimal places. Keep a limit to how
        far the program will go. Find e to the Nth Digit - Just like the
        previous problem, but with e instead of PI. Enter a number and have the
        program generate e up to that many decimal places. Keep a limit to how
        far the program will go. Fibonacci Sequence - Enter a number and have
        the program generate the Fibonacci sequence to that number or to the Nth
        number. Prime Factorization - Have the user enter a number and find all
        Prime Factors (if there are any) and display them. Next Prime Number -
        Have the program find prime numbers until the user chooses to stop
        asking for the next one. Find Cost of Tile to Cover W x H Floor -
        Calculate the total cost of tile it would take to cover a floor plan of
        width and height, using a cost entered by the user. Mortgage Calculator
        - Calculate the monthly payments of a fixed term mortgage over given Nth
        terms at a given interest rate. Also figure out how long it will take
        the user to pay back the loan. For added complexity, add an option for
        users to select the compounding interval (Monthly, Weekly, Daily,
        Continually). Change Return Program - The user enters a cost and then
        the amount of money given. The program will figure out the change and
        the number of quarters, dimes, nickels, pennies needed for the change.
        Binary to Decimal and Back Converter - Develop a converter to convert a
        decimal number to binary or a binary number to its decimal equivalent.
        Calculator - A simple calculator to do basic operators. Make it a
        scientific calculator for added complexity. Unit Converter (temp,
        currency, volume, mass and more) - Converts various units between one
        another. The user enters the type of unit being entered, the type of
        unit they want to convert to and then the value. The program will then
        make the conversion. Alarm Clock - A simple clock where it plays a sound
        after X number of minutes/seconds or at a particular time. Distance
        Between Two Cities - Calculates the distance between two cities and
        allows the user to specify a unit of distance. This program may require
        finding coordinates for the cities like latitude and longitude. Credit
        Card Validator - Takes in a credit card number from a common credit card
        vendor (Visa, MasterCard, American Express, Discoverer) and validates it
        to make sure that it is a valid number (look into how credit cards use a
        checksum). Tax Calculator - Asks the user to enter a cost and either a
        country or state tax. It then returns the tax plus the total cost with
        tax. Factorial Finder - The Factorial of a positive integer, n, is
        defined as the product of the sequence n, n-1, n-2, ...1 and the
        factorial of zero, 0, is defined as being 1. Solve this using both loops
        and recursion. Find PI to the Nth Digit - Enter a number and have the
        program generate PI up to that many decimal places. Keep a limit to how
        far the program will go. Find e to the Nth Digit - Just like the
        previous problem, but with e instead of PI. Enter a number and have the
        program generate e up to that many decimal places. Keep a limit to how
        far the program will go. Fibonacci Sequence - Enter a number and have
        the program generate the Fibonacci sequence to that number or to the Nth
        number. Prime Factorization - Have the user enter a number and find all
        Prime Factors (if there are any) and display them. Next Prime Number -
        Have the program find prime numbers until the user chooses to stop
        asking for the next one. Find Cost of Tile to Cover W x H Floor -
        Calculate the total cost of tile it would take to cover a floor plan of
        width and height, using a cost entered by the user. Mortgage Calculator
        - Calculate the monthly payments of a fixed term mortgage over given Nth
        terms at a given interest rate. Also figure out how long it will take
        the user to pay back the loan. For added complexity, add an option for
        users to select the compounding interval (Monthly, Weekly, Daily,
        Continually). Change Return Program - The user enters a cost and then
        the amount of money given. The program will figure out the change and
        the number of quarters, dimes, nickels, pennies needed for the change.
        Binary to Decimal and Back Converter - Develop a converter to convert a
        decimal number to binary or a binary number to its decimal equivalent.
        Calculator - A simple calculator to do basic operators. Make it a
        scientific calculator for added complexity. Unit Converter (temp,
        currency, volume, mass and more) - Converts various units between one
        another. The user enters the type of unit being entered, the type of
        unit they want to convert to and then the value. The program will then
        make the conversion. Alarm Clock - A simple clock where it plays a sound
        after X number of minutes/seconds or at a particular time. Distance
        Between Two Cities - Calculates the distance between two cities and
        allows the user to specify a unit of distance. This program may require
        finding coordinates for the cities like latitude and longitude. Credit
        Card Validator - Takes in a credit card number from a common credit card
        vendor (Visa, MasterCard, American Express, Discoverer) and validates it
        to make sure that it is a valid number (look into how credit cards use a
        checksum). Tax Calculator - Asks the user to enter a cost and either a
        country or state tax. It then returns the tax plus the total cost with
        tax. Factorial Finder - The Factorial of a positive integer, n, is
        defined as the product of the sequence n, n-1, n-2, ...1 and the
        factorial of zero, 0, is defined as being 1. Solve this using both loops
        and recursion.
      </Box>
    </Route>
  )
}
