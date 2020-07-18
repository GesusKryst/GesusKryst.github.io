function getNumber()
{
    return Math.floor(Math.random() * 4)
}

function createCookie()
{
    return 0
}

function moodGen()
{
    var moodIn = getNumber()
    switch(moodIn)
    {
        case(0):
            return "metalcock.jpg"
        case(1):
            return "Skelecock.png"
        case(2):
            return "sneakyCock.png"
        case(3):
            return "stromg.png"
    }
}


