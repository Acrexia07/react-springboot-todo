
const person = {
    name: 'John Doe',
    age: 30,
    address: {
        houseNumber: 123,
        street: 'Main St',
        city: 'USA',
    },
    contactNumber: '123-456-7890',
    profiles: ['twitter', 'facebook', 'instagram'],
    printProfile: () => {
        person.profiles.map (
            profile => console.log(profile)
        )
    }
}



function LearningJavaScript() {
    return (
        <div className="LearningJavaScript">
            <div>{ person.name }</div>
            <div>{ person.age }</div>
            <div>
                 { person.address.houseNumber + 
                   " " + person.address.street + 
                   " " + person.address.city 
                 }
            </div>
            <div>{ person.contactNumber }</div>
            <div>{ person.profiles[0] }</div>
            <div>{ person.printProfile() }</div>
        </div>
    );
}

export default LearningJavaScript;