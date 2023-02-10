
CREATE TABLE IF NOT EXISTS public.customer
(
    id bigint NOT NULL,
    email character varying(320),
    company_name character varying(300),
    CONSTRAINT customer_pkey PRIMARY KEY (id)
)

CREATE TABLE IF NOT EXISTS public.netsuit_customer
(
    id bigint NOT NULL,
    email character varying(320),
    company_name character varying(300),
    CONSTRAINT netsuit_customer_pkey PRIMARY KEY (id)
)

INSERT INTO public.netsuit_customer (id, email, company_name)
    VALUES (1, 'vasya@gmail.com', 'vasya_and_petya');