import React, { Component } from "react";
import Container from '../components/Container/Container';
import ContactForm from '../components/ContactForm/ContactForm';

import Filter from '../components/Filter/Filter';
import ContactList from '../components/ContactList/ContactList';

import css from '../index.css';

export class App extends Component {
    state = {
        contacts: [
            { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
            { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
            { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
            { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ],

        filter: '',
    }

    addContact = newContact => {
        const duplicateName = this.state.contacts.find(contact => contact.name === newContact.name);

        if (duplicateName) 
        {
            alert(`${newContact.name} is already on contacts`);
            return;
        }

        this.setState(({ contacts }) => ({
            contacts: [newContact, ...contacts],
        }))
    }

    changeFilter = event => {
        this.setState({ filter: event.currentTarget.value });
    }

    filterContacts = () => {
        const { contacts, filter } = this.state;

        const normalizedFilter = filter.toLowerCase();

        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(normalizedFilter)
        )
    }

    deleteContact = id => {
        this.setState(prevState => ({
            contacts: prevState.contacts.filter(contact => contact.id !== id),
        }))
    }

    render() 
    {
        const {filter} = this.state;
        const filteredResults = this.filterContacts();

        return (
            <Container>
                <h1 className={css.title}>Phonebook</h1>
                <ContactForm onSubmit={this.addContact} />
                <h2 className={css.title}>Contacts</h2>
                <Filter value={filter} onChange={this.changeFilter} />
                <ContactList contacts={filteredResults} onDeleteContact={this.deleteContact}/>
            </Container>
        )
    }
}

export default App;