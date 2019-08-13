

export const UserNavDropDownOptions = [
    {
        label:"Minha conta",
        to:"/dashboard/account",
        onClick: (e) => {
            alert('clicked');
        },
        toggleClose: true
    },
    {
        label:"Fazer upgrade",
        to:"/dashboard/upgrade",
        onClick: null,
        toggleClose: true
    }
]