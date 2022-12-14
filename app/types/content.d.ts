import { ProductInterface } from "../models/product"

export default interface ContentType {
    cms: {
        global: {
            app_name: string, favicon: string
        }
        general: { date: string, time: string, home: string, days: string[], months: string[] }
        auth: {
            footer: { copyrights: string, all_rights: string }
            messages: {
                admin: { not_found: string, invalid: string, sent: string }
                user: { inactive: string, unauthorized: string, sent: string, reset: string, failure: string }
            }
            pages: {
                user: { login: { title: string, sign_in: string, email_address: string, password: string } }
                admin: {
                    login: { sign_in_to: string, sign_in: string, admin_panel: string, email_address: string, password: string, sms: string, email: string, otp_method: string },
                    verify: { enter: string, verification_code: string, continue: string, didnt_receive_code: string, resend: string }
                }
            }
        }
        backend: {
            header: { id: string, sign_out: string, no_message: string, no_notification: string, logout: string, close: string, sure_logout: string, you_have: string, messages: string, unread_message: string, unread_notification: string, unread_messages: string, unread_notifications: string, view_all_messages: string, view_all_notifications: string },
            footer: { copyright: string, all_rights: string },
            sidebar: {
                admin: string
                user: string
                menu: {
                    dashboard: { title: string },
                    notifications: { title: string },
                    admins: { title: string, add: string, index: string }
                    users: { title: string, add: string, index: string }
                    roles: { title: string, add: string, index: string }
                    features: { title: string, add: string, index: string }
                    products: { title: string, add: string, index: string }
                    frequencies: { title: string, add: string, index: string }
                    ranges: { title: string, add: string, index: string }
                    cms: { title: string, global: string, general: string, auth: string, backend: string, frontend: string }
                    settings: { title: string, cms: string, language: string }
                }
            },
            components: {
                form: { save: string, save_add: string, selected_file: string, active: string, inactive: string },
                list: {
                    action: string, all: string, first: string, last: string, loading: string, print: string, pdf: string, csv: string, excel: string, search: string, see: string, show: string, sl: string, showing: string, from: string
                    entries: { singular: string, plural: string }
                }
            },
            messages: {
                admins: { not_found: string, created: string, updated: string, deleted: string },
                users: { not_found: string, created: string, updated: string, deleted: string },
                roles: { not_found: string, created: string, updated: string, deleted: string },
                features: { not_found: string, created: string, updated: string, deleted: string },
                products: { not_found: string, created: string, updated: string, deleted: string },
                frequencies: { not_found: string, created: string, updated: string, deleted: string },
                ranges: { not_found: string, created: string, updated: string, deleted: string },
                notifications: { not_found: string }
                cms: { not_found: string, updated: string }
            },
            pages: {
                dashboard: {
                    admin: {
                        icon: string, title: string, subtitle: string
                        blocks: { users: string, products: string, frequencies: string, ranges: string }
                    },
                    user: {
                        icon: string, title: string, subtitle: string
                        blocks: { users: string, products: string, frequencies: string, ranges: string }
                        general_report: { title: string, subtitle: string, products: string, total_products: string }
                    }
                },
                cms: {
                    title: string, global: string, general: string, messages: string, frontend: string, components: string, backend: string, auth: string
                    form: { logo: string, app_name: string, company_name: string, company_logo: string }
                },
                admins: {
                    title: string, add: string, edit: string, index: string
                    form: { name: string, full_name: string, phone: string, password: string, password_confirmation: string, email: string, admin_photo: string, photo: string }
                },
                users: {
                    title: string, add: string, edit: string, index: string
                    form: { name: string, full_name: string, phone: string, password: string, password_confirmation: string, email: string, role: string, select_role: string, user_photo: string, photo: string }
                },
                roles: {
                    title: string, add: string, edit: string, index: string
                    form: { name: string, description: string, features: string, created_at: string, create: string, update: string, delete: string }
                },
                features: {
                    title: string, add: string, edit: string, index: string
                    form: { name: string, prefix: string, created_at: string }
                },
                products: {
                    title: string, add: string, edit: string, index: string
                    form: { name: string, photo: string, product_photo: string, created_at: string }
                },
                frequencies: {
                    title: string, add: string, edit: string, index: string
                    form: { name: string, created_at: string }
                },
                ranges: {
                    title: string, add: string, edit: string, index: string
                    form: { name: string, created_at: string }
                },
                notifications: {
                    title: string, show: string, index: string
                    form: { you_have_no_notification: string }
                },
                settings: {
                    title: string, subtitle: string
                    language: {
                        title: string
                        form: { select_language: string }
                    }
                }
            }
        }
        frontend: {
            header: { menu: { home: string, question_1: string, question_2: string, question_3: string, question_4: string, congrats: string } },
            components: { form: { continue: string, submit: string }, item_block: { selected: string, select: string } },
            messages: {},
            pages: {
                home: {
                    description: string
                    welcome: string
                    greetings: string
                    form: { select_area: string, start: string }
                },
                question_1: { title: string, description: string, page_title: string, page_description: string }
                question_2: { title: string, description: string, page_title: string, page_description: string }
                question_3: { title: string, description: string, page_title: string, page_description: string }
                question_4: { title: string, description: string, page_title: string, page_description: string }
                congrats: {
                    title: string, description: string
                    thank_you: string
                    finished: string
                    home: string
                }
            }
        }
    }
    items: ProductInterface[]
}