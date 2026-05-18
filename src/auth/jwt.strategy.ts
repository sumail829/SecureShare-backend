import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        const jwtSecret = process.env.SUPABASE_JWT_SECRET;

        if (!jwtSecret) {
            throw new Error('SUPABASE_JWT_SECRET is not defined');
        }
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: jwtSecret,
        });
    }

    async validate(payload: any) {
        return {
            id: payload.sub, // Supabase user id
            email: payload.email,
        };
    }
}