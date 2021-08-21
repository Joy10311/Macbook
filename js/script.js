//  1st button 
document.getElementById('memory-first').addEventListener('click', function () {
    const memoryFirst = document.getElementById('memory-cost');
    const memoryDefaultPrice = memoryFirst.innerText;
    memoryFirst.innerText = memoryDefaultPrice * 0;
});

// 2nd button 

document.getElementById('memory-second').addEventListener('click', function () {
    const memorySecond = document.getElementById('memory-cost');
    const memoryExtraPrice = memorySecond.innerText;
    memorySecond.innerText = 180;

});
// storage part*****

// storage 1st  button 
document.getElementById('storage-first').addEventListener('click', function () {
    const storageFirst = document.getElementById('storage-cost');
    const storageDefaultPrice = storageFirst.innerText;
    storageFirst.innerText = storageDefaultPrice * 0;

});

// // storage 2nd  button 
document.getElementById('storage-second').addEventListener('click', function () {
    const storageSecond = document.getElementById('storage-cost');
    const storageCostSecond = storageSecond.innerText;
    storageSecond.innerText = 100;
});

// storage 3rd  button 
document.getElementById('storage-thrid').addEventListener('click', function () {
    const storageThird = document.getElementById('storage-cost');
    const storageCostThird = storageThird.innerText;
    storageThird.innerText = 180;
});

// deliery charge part*********

// delivery 1st button
document.getElementById('delivery-free').addEventListener('click', function () {
    const deliveryFirst = document.getElementById('delivery-cost');
    const deliveryDefault = deliveryFirst.innerText;
    deliveryFirst.innerText = deliveryDefault * 0;
});

// delivery 2nd button 
document.getElementById('delivery-charge').addEventListener('click', function () {
    const deliverySecond = document.getElementById('delivery-cost');
    const deliveryCost = deliverySecond.innerText;
    deliverySecond.innerText = 20;

})
