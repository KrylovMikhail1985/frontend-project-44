import readLine from "readline-sync";

export default () => {
    var userName = readLine.question('May I have your name? ');
    console.log('Hello, ' + userName + '!');
};
