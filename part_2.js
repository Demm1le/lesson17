# 2.1 Цикл от 1 до 10
let i = 1
while i <= 10
    print i
    let i = i + 1
end

# 2.2 Таблица умножения от 1x1 до 9x9
let x = 1
while x <= 9
    let y = 1
    while y <= 9
        print x * y
        let y = y + 1
    end
    let x = x + 1
end

# 2.3 Уравнение x = 2 + 2 * 2 через цикл
let i = 1
let result = 0
while i <= 2
    result = result + 2
    let i = i + 1
end
result = result + 2
print result

# 2.4 Поиск числа Пи (приближение через формулу Лейбница)
let pi = 0
let k = 0
let sign = 1
while k < 1000
    pi = pi + sign * (4 / (2 * k + 1))
    sign = sign * -1
    let k = k + 1
end
print pi

# 2.5 Производная от выражения (пример: f(x) = x^2)
let x = 5
let dx = 0.0001
let fx1 = x * x
let fx2 = (x + dx) * (x + dx)
let derivative = (fx2 - fx1) / dx
print derivative