in vec2 texCoord;
out vec4 fragColor;

uniform sampler2D texture1;
uniform sampler2D texture2;
uniform float time; // = 1.0;
uniform float fuckUp; // = 0.0;
uniform float fuckUp2; // = 0.0;
uniform float fuckUp3; // = -1.0;
void main()
{
	vec2 p = vec2((texCoord.s*256./128.)+fuckUp,(texCoord.t*256./128.)+fuckUp2);
	p = p- vec2(1.-sin(time)*.2, 1.-sin(time*2.)*.2);
    
    float a = atan( p.y, p.x );
    float r = sqrt( dot(p,p)+.02);
    
    a += sin(0.5*r-0.5*time );
	
	float h = .6+0.5*cos(5.0*a);

	float s = smoothstep(0.4,0.5,h);

    vec2 uv;
    uv.x = 2.*time*fuckUp3*2. + 1.0/(r + .1*s);
    uv.y = 1.0*a/3.1416;

    vec3 col = texture2D( texture1, uv ).xyz;

    float ao = smoothstep(0.53,0.3,h)-smoothstep(0.5,1.0,h);
    col *= 1.0 - 0.1*ao*r;
	col *= r;

    fragColor  = vec4( col, 1.0 );
}