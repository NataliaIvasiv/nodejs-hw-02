import { ContactsCollection } from '../db/models/contacts.js';

export const getAllContacts = async () => {
  const contacts = await ContactsCollection.find();
  return contacts;
};

export const getContactById = async (contactId) => {
  const contact = await ContactsCollection.findById(contactId);
  return contact;
};

export const createContact = async (payload) => {
  const contact = await ContactsCollection.create(payload);
  return contact;
};

export const updateContact = async (contactId, payload, options = {}) => {
  
  console.log("Contact ID:", contactId);
  console.log("Payload:", payload);
  console.log("Options:", options);
 try {const rawResult = await ContactsCollection.findOneAndUpdate(
    { _id: contactId },
     payload,
    {
      new: true,
      includeResultMetadata: true,
      ...options,
    },
  );

  console.log("Raw result from DB:", rawResult);

  if (!rawResult || !rawResult.value) {
    console.log("No result or value from update");
    return null;
  };

  return {
    contact: rawResult.value,
    isNew: Boolean(rawResult?.lastErrorObject?.upserted),
   };
 } catch(error) {
    console.error("Error during updateContact:", error);
    throw error;
  }
};

export const deleteContact = async (contactId) => {
  const contact = await ContactsCollection.findOneAndDelete({
    _id: contactId,
  });

  return contact;
};
