import axios from "axios";
import bcrypt from 'bcryptjs';

const url = process.env.API_URL || 'http://localhost:3001';

export async function getCompaniesList() {
    try {
        const res = await axios.get(`${url}/companies`);
        return res.data;
    } catch (error) {
        console.error('Error fetching companies list:', error);
        throw error;
    }
}

export async function getCompanyByID(id) {
    try {
        const res = await axios.get(`${url}/companies/${id}`);
        return res.data;
    } catch (error) {
        console.error('Error fetching company by ID:', error);
        throw error;
    }
}

export async function getCompanyByName(companyName) {
    try {
        const companies = await getCompaniesList();
        for (let company of companies) {
            if (company.companyName.toLowerCase() === companyName.toLowerCase()) {
                return company;
            }
        }
        return null;
    } catch (error) {
        console.error('Error fetching company by name:', error);
        throw error;
    }
}

export async function changeCompanyPassword(id, newPassword) {
    try {
        const res = await axios.patch(`${url}/companies/${id}`, {
            password: newPassword,
        });
        return res.data;
    } catch (error) {
        console.error('Error changing company password:', error);
        throw error;
    }
}

export function comparePasswords(rawPassword, hash) {
    return bcrypt.compareSync(rawPassword, hash);
}
