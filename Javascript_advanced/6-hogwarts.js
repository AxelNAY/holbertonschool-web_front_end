class studentHogwarts
{
    privateScore = 0;
    name = null;

    __changeScoreBy(points)
    {
        this.privateScore += points;
    }
    
    setName(newName)
    {
        let name = newName;
        this.name = name;
    }

    rewardStudent()
    {
        this.__changeScoreBy(1);
    }

    penalizeStudent()
    {
        this.__changeScoreBy(-1);
    }

    getScore()
    {
        return this.name + ": " + this.privateScore;
    }
}

const harry = new studentHogwarts();
harry.setName('Harry');
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();

console.log(harry.getScore());

const draco = new studentHogwarts();
draco.setName('Draco');
draco.rewardStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();

console.log(draco.getScore());
