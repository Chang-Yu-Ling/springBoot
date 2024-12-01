## https://ithelp.ithome.com.tw/articles/10258894
print("23213")

#默認使用精確模式(一般直接使用精確模式即可)
import jieba
text = '我來到北京清華大學一一一'
print('預設:', '|'.join(jieba.cut(text, cut_all=False, HMM=True)))
print('全關閉:', '|'.join(jieba.cut(text, cut_all=False, HMM=False)))
print('全關閉:', '|'.join(jieba.cut(text, cut_all=True, HMM=True)))
#輸出
'''
預設: 我|來到|北京|清華|大學
全關閉: 我|來到|北京|清華|大學
全關閉: 我來|來到|北京|清華|華大|大學
搜尋引擎: 我|來到|北京|清華|大學
'''

text = '我來到北京清華大學一一一'
words = jieba.cut(text)
words_list = []
for word in words:
    words_list.append(word)

print(f'output:{words_list}')

jieba.load_userdict('./dict_define.txt')

words = jieba.cut(text)
words_list = []
for word in words:
    words_list.append(word)
print(f'output:{words_list}')

##==================
## read: https://shengyu7697.github.io/python-read-text-file/
## encode: https://stackoverflow.com/questions/49021589/how-do-i-fix-this-cp950-illegal-multibyte-sequence-unicodedecodeerror-when-rea
path = 'dict_define.txt'
f = open(path, 'r', encoding="utf-8")
print(f.read())
f.close()