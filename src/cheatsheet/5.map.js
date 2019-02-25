const colors = ['red', 'green', 'blue'];

colors.map(function (color) {
    return '<li>' + color + '</li>';
})

colors.map(color => '<li>' + color + '</li>');

const items = colors.map(color => `<li>${color}</li>`);
console.log(items);