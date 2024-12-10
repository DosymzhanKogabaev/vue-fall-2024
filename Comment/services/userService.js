import axios from "axios";
import bcrypt from 'bcryptjs';

const url = process.env.API_URL || 'http://localhost:3001';

export async function getUsersList() {
    try {
        const res = await axios.get(`${url}/users`);
        return res.data;
    } catch (error) {
        console.error('Error fetching users list:', error);
        throw error; // Rethrow to handle at the call site
    }
}

export async function getUserByID(id) {
    try {
        const res = await axios.get(`${url}/users/${id}`);
        return res.data;
    } catch (error) {
        console.error('Error fetching user by ID:', error);
        throw error; // Rethrow to handle at the call site
    }
}

export async function changeUserPassword(id, newPassword) {
    try {
        const res = await axios.patch(`${url}/users/${id}`, {
            password: newPassword,
        });
        return res.data;
    } catch (error) {
        console.error('Error changing user password:', error);
        throw error; // Rethrow to handle at the call site
    }
}

export function comparePasswords(rawPassword, hash) {
    return bcrypt.compareSync(rawPassword, hash);
}
