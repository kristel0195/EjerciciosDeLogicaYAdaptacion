#Autor Kristel Guzman Venegas

myArray = [1,2,1,3,3,1,2,1,5,1]
(1..5).each { |i| puts "#{i}: " + '*' * myArray.count(i)  }