// - ให้สร้างฟังก์ชันเพื่อตรวจสอบ object ว่าเป็น object ว่างหรือไม่ 
// - ถ้า object มี property อย่างน้อยหนึ่งแสดงว่าไม่ใช่ object ว่าง

function isEmptyObject(obj) {
    return Object.keys(obj).length === 0;
}

let obj1 = {};
let obj2 = { a: "aa"};

console.log(isEmptyObject(obj1))
console.log(isEmptyObject(obj2))




