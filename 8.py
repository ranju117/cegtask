file1 = open('test.txt')
for line in file1:
    print line    
file2 = open('test2.txt','w')
file2.write("This line has been added")