import time
import os
from pygame import mixer
def getRecognizedWord(txtFilePath):
    with open(txtFilePath,"r") as f:
        return f.readlines()[0]

recognizedWord=""
volume=0.5
mixer.init()
mixer.music.load("../gui/src/components/forest-with-small-river-birds-and-nature-field-recording-6735.mp3")
mixer.music.set_volume(volume)
mixer.music.play(-1)
mixer.music.pause()
musicState="paused"
mixer.music.get_busy()

while True:
    time.sleep(1)

    with open("musicInfo.txt","w") as f:
        f.write(str(volume)+"|"+str(musicState))

    if(recognizedWord!=getRecognizedWord("fileWithRecognizedWord.txt")):
        print(getRecognizedWord("fileWithRecognizedWord.txt"))
        recognizedWord=getRecognizedWord("fileWithRecognizedWord.txt")
        if (recognizedWord == "ścisz muzykę" or
            recognizedWord == "jeszcze ścisz muzykę" or
            recognizedWord == "bardziej ścisz muzykę"):
            if(volume-0.1>0.1):
                volume=volume-0.1
                mixer.music.set_volume(volume)
        if (recognizedWord == "podgłośnij muzykę" or
            recognizedWord == "jeszcze podgłośnij muzykę" or
            recognizedWord == "bardziej podgłośnij muzykę"):
            if (volume + 0.1 < 0.9):
                volume = volume + 0.1
                mixer.music.set_volume(volume)
        if (recognizedWord == "zatrzymaj muzykę" or
            recognizedWord == "muzyka stop"):
            musicState="paused"
            mixer.music.pause()
        if (recognizedWord == "wznów muzykę"):
            musicState="unpaused"
            mixer.music.unpause()
