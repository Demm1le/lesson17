# 1.1 Проверка возраста на покупку алкоголя
let age = 19
if age >= 18
    print "Можно купить алкоголь"
else
    print "Нельзя купить алкоголь"
end

# 1.2 Проверка, хватает ли денег
let price = 150
let money = 100
if money >= price
    print "Покупка возможна"
else
    print "Недостаточно денег"
end

# 1.3 Путь домой
print "Точка A: Колледж"
print "Маршрут 1: A -> D (пешком)"
print "Маршрут 2: A -> B (пешком), B -> C (автобус, ожидание 10 мин), C -> D (пешком)"

# 1.4 Определение диапазона x
let a = 20
let b = 15
let c = 10
let d = 5
let x = 12

if x > a
    print "x > a"
else
    if x < d
        print "x < d"
    else
        if x < c
            print "c > x > d"
        else
            if x < b
                print "b > x > c"
            else
                print "a > x > b"
            end
        end
    end
end